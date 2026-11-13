import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import PrimaryButton from "../components/PrimaryButton";
export default function Login() {
  const nav = useNavigate();
  return (
    <div className="page onboarding-page">
      <Header title="Masuk ke Maxim" back />
      <h1>Selamat datang kembali</h1>
      <p className="lead">Masukkan nomor HP untuk melanjutkan.</p>
      <label>Nomor HP</label>
      <input className="text-input" placeholder="+62 812 3456 7890" inputMode="tel" />
      <PrimaryButton onClick={() => nav("/otp")}>Lanjutkan</PrimaryButton>
      <p className="microcopy">Kami hanya menggunakan nomor ini untuk verifikasi akun.</p>
    </div>
  );
}
