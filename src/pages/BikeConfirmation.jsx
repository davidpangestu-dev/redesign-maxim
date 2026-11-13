import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import FareSummary from "../components/FareSummary";
import PrimaryButton from "../components/PrimaryButton";
export default function BikeConfirmation() {
  const nav = useNavigate();
  return (
    <div className="page">
      <Header title="Konfirmasi Pesanan" back />
      <div className="confirm-card">
        <span className="service-icon large">🏍️</span>
        <div>
          <h2>Bike</h2>
          <p>Cepat & hemat</p>
        </div>
      </div>
      <div className="route-card">
        <div>
          <span className="dot green"></span>
          <div>
            <small>Lokasi jemput</small>
            <strong>Lokasi saya</strong>
          </div>
        </div>
        <div className="route-line"></div>
        <div>
          <span className="dot red"></span>
          <div>
            <small>Tujuan</small>
            <strong>Jl. Malioboro, Yogyakarta</strong>
          </div>
        </div>
      </div>
      <div className="info-list">
        <div>
          Promo <strong>Hemat Rp5.000</strong>
        </div>
        <div>
          Pembayaran <strong>Tunai</strong>
        </div>
      </div>
      <FareSummary />
      <PrimaryButton onClick={() => nav("/bike/searching")}>Konfirmasi Pesanan</PrimaryButton>
    </div>
  );
}
