import React from "react";
import styles from "./CheckOTP.module.css";
import { useQuery } from "@tanstack/react-query";
// services
import { checkOtp } from "../../services/auth";
import { userProfile } from "../../services/user";
// utils
import { cookies } from "../../utils/cookies";
// router-dom
import { useNavigate } from "react-router-dom";

const CheckOTP = ({ mobile, code, setCode, setStep }) => {
  const navigate = useNavigate();
  const submitHandler = async (event) => {
    event.preventDefault();
    if (code.length !== 5) return;
    const { response, error } = await checkOtp(mobile, code);
    if (response) {
      cookies(response.data);
      navigate("/");
    }
    if (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
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
      <button onClick={() => setStep(1)} className={styles.backButton}>تغییر شماره تلفن</button>
    </form>
  );
};

export default CheckOTP;
