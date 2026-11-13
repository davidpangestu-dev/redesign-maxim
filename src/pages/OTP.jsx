import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import PrimaryButton from "../components/PrimaryButton";
export default function OTP() {
  const nav = useNavigate();
  return (
    <div className="page onboarding-page">
      <Header title="Verifikasi" back />
      <h1>Masukkan kode verifikasi</h1>
      <p className="lead">Kode 4 digit dikirim ke nomor kamu.</p>
      <div className="otp-row">
        {[1, 2, 3, 4].map((x) => (
          <input key={x} className="otp-input" maxLength="1" inputMode="numeric" />
        ))}
      </div>
      <PrimaryButton onClick={() => nav("/profile-setup")}>Verifikasi</PrimaryButton>
    </div>
  );
}
