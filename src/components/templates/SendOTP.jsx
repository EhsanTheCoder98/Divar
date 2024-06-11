import React from "react";
import styles from "./SendOTP.module.css";
// services
import { sendOtp } from "../../services/auth";

const SendOTP = ({ setStep, setMobile, mobile }) => {
  const submitHandler = async (event) => {
    event.preventDefault();
    if (mobile.length !== 11) return;

    const { response, error } = await sendOtp(mobile);
    if (response) {
      setStep(2);
    }else{
      console.log(error.message)
    }
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <p>ورود به حساب کاربری</p>
      <span>
        برای استفاده از امکانات دیوار،لطفا شماره موبایل خود را وارد کنید.کد
        تایید به این شماره پیامک خواهد شد.
      </span>
      <label htmlFor="input">شماره تلفن:</label>
      <input
        type="text"
        placeholder="شماره تلفن خود را وارد کنید"
        id="input"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <button type="submit">ارسال کد تایید</button>
    </form>
  );
};

export default SendOTP;
