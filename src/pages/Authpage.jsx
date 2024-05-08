import React, { useState } from "react";

// components
import SendOTP from "../components/templates/SendOTP";
import CheckOTP from "../components/templates/CheckOTP";

const Authpage = () => {
  const [step, setStep] = useState(1);
  const [mobile,setMobile] = useState("");
  const [code,setCode] = useState("");
  return (
    <div>
      {step === 1 && <SendOTP setStep={setStep} mobile={mobile} setMobile={setMobile}  />}
      {step === 2 && <CheckOTP mobile={mobile} code={code} setCode={setCode} setStep={setStep} />}
    </div>
  );
};

export default Authpage;
