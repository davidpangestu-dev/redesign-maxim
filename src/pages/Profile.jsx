import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import PrimaryButton from "../components/PrimaryButton";
export default function Profile() {
  const [saved, setSaved] = useState(false);
  return (
    <div className="page">
      <Header title="Profil" back />
      <div className="profile-top">
        <div className="profile-avatar large">D</div>
        <h2>David</h2>
        <p className="muted">+62 812 3456 7890 · david@example.com</p>
      </div>
      <label>Nama</label>
      <input className="text-input" defaultValue="David" />
      <label>Nomor telepon</label>
      <input className="text-input" defaultValue="+62 812 3456 7890" />
      <label>Email</label>
      <input className="text-input" defaultValue="david@example.com" />
      <PrimaryButton onClick={() => setSaved(true)}>Simpan</PrimaryButton>
      {saved && <div className="toast success">Profil berhasil disimpan</div>}
    </div>
  );
}
