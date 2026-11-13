import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import FareSummary from "../components/FareSummary";
import PrimaryButton from "../components/PrimaryButton";
import { getRidePricing, getRideSelection } from "../data/rideOptions";
export default function BikeConfirmation({ serviceType = "bike", selection }) {
  const nav = useNavigate();
  const selected = getRideSelection(serviceType, selection);
  const pricing = getRidePricing(selected);
  return (
    <div className="page">
      <Header title="Konfirmasi Pesanan" back />
      <div className="confirm-card">
        <span className="service-icon large">{serviceType === "car" ? "🚘" : "🏍️"}</span>
        <div>
          <h2>{selected.name}</h2>
          <p>{selected.subtitle}</p>
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
        {pricing.discount > 0 && <div>Promo <strong>Hemat Rp{pricing.discount.toLocaleString("id-ID")}</strong></div>}
        <div>
          Pembayaran <strong>Tunai</strong>
        </div>
      </div>
      <FareSummary fare={pricing.fare} discount={pricing.discount} total={pricing.total} />
      <PrimaryButton onClick={() => nav(`/${serviceType}/searching`)}>Konfirmasi Pesanan</PrimaryButton>
    </div>
  );
}
