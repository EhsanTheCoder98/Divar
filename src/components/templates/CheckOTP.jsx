import React from "react";
// services
import { checkOtp } from "../../services/auth";
// utils
import {cookies} from "../../utils/cookies";

const CheckOTP = ({ mobile, code, setCode, setStep }) => {
  const submitHandler = async (event) => {
    event.preventDefault();
    if (code.length !== 5) return;
    const { response, error } = await checkOtp(mobile, code);
    if (response) {
      cookies(response.data)
    }
    if (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <p>تایید کد پیامک شده</p>
      <span>
        لطفا کد تایید ارسال شده به شماره تلفن «{mobile}» را وارد کنید.
      </span>
      <label htmlFor="input">کد تایید:</label>
      <input
        type="text"
        placeholder="کد تایید را وارد کنید"
        id="input"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button type="submit">ورود</button>
      <button onClick={() => setStep(1)}>تغییر شماره تلفن</button>
    </form>
  );
};

export default CheckOTP;
