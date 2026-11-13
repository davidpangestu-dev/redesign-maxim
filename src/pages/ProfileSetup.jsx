import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import PrimaryButton from "../components/PrimaryButton";
export default function ProfileSetup() {
  const nav = useNavigate();
  return (
    <div className="page onboarding-page">
      <Header title="Lengkapi profilmu" back />
      <div className="onboarding-progress">
        <span className="active"></span>
        <span className="active"></span>
        <span></span>
      </div>
      <h1>Satu kali saja, ya.</h1>
      <p className="lead">Lengkapi data agar pengalamanmu lebih personal. Preferensi di bawah ini opsional.</p>
      <label>Nama</label>
      <input className="text-input" placeholder="Nama kamu" />
      <label>
        Email <span className="optional">opsional</span>
      </label>
      <input className="text-input" placeholder="email@contoh.com" />
      <label>
        Preferensi <span className="optional">opsional</span>
      </label>
      <div className="choice-grid">
        <button className="choice-tile">Sering bepergian</button>
        <button className="choice-tile">Suka promo</button>
      </div>
      <PrimaryButton onClick={() => nav("/")}>Simpan & Lanjutkan</PrimaryButton>
    </div>
  );
}
