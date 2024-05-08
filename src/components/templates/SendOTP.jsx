import React from "react";
// services
import sendOtp from "../../services/auth";

const SendOTP = ({ setStep, setMobile, mobile }) => {
    const submitHandler = async(event) => {
        event.preventDefault();
        if(mobile.length !== 11) return;

        const {response,error} = await sendOtp(mobile);
        console.log({response,error})
        if(response){
            setStep(2)
        }
    }
  return (
    <form onSubmit={submitHandler}>
      <p>ورود به حساب کاربری</p>
      <span>
        برای استفاده از امکانات دیوار،لطفا شماره موبایل خود را وارد کنید.کد
        تایید به این شماره پیامک خواهد شد.
      </span>
      <label htmlFor="input"></label>
      <input
        type="text"
        placeholder="شماره تلفن خود را وارد کنید"
        id="input"
        value={mobile}
        onChange={(e)=>setMobile(e.target.value)}
      />
      <button type="submit">ارسال کد تایید</button>
    </form>
  );
};

export default SendOTP;
