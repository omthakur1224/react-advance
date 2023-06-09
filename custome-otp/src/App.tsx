import { useState } from "react";
import OtpInput from "./components/OtpInput";
import "./App.css";

export default function App() {
  const [otp, setOtp] = useState("123456");
  const onChange = (value: string) => setOtp(value);
  return (
    <div className="container">
      <h1>React TypeScript OTP Input</h1>
      <OtpInput value={otp} valueLength={otp.length} onChange={onChange} />
    </div>
  );
}
