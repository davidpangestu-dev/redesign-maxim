import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import { getRidePricing, getRideSelection } from "../data/rideOptions";
export default function TripCompleted({ serviceType = "bike", selection }) {
  const nav = useNavigate();
  const selected = getRideSelection(serviceType, selection);
  const pricing = getRidePricing(selected);
  return (
    <div className="page centered-page">
      <div className="success-icon">✓</div>
      <h1>Perjalanan selesai</h1>
      <p className="muted">Terima kasih sudah menggunakan Maxim.</p>
      <div className="total-card">
        <small>Total perjalanan</small>
        <small>{selected.name}</small>
        <strong>Rp{pricing.total.toLocaleString("id-ID")}</strong>
      </div>
      <div className="rating">
        <p>Bagaimana pengalamanmu?</p>
        <div>★★★★★</div>
      </div>
      <PrimaryButton onClick={() => nav(`/${serviceType}`)}>Pesan lagi</PrimaryButton>
      <SecondaryButton onClick={() => nav("/")}>Kembali ke Beranda</SecondaryButton>
    </div>
  );
}
