import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import MapMock from "../components/MapMock";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import { getRidePricing, getRideSelection } from "../data/rideOptions";
export default function DriverFound({ serviceType = "bike", selection }) {
  const nav = useNavigate();
  const selected = getRideSelection(serviceType, selection);
  const pricing = getRidePricing(selected);
  return (
    <div className="page flush">
      <Header title="Driver ditemukan" back />
      <MapMock active />
      <div className="driver-panel">
        <div className="driver-card">
          <div className="driver-avatar">R</div>
          <div className="driver-main">
            <h2>Rizky</h2>
            <p>⭐ 4.9 · {selected.vehicleInfo}</p>
            <p>
              {selected.name} · Estimasi Rp{pricing.total.toLocaleString("id-ID")}
            </p>
          </div>
          <span className="verified">✓</span>
        </div>
        <div className="driver-actions">
          <SecondaryButton>Hubungi</SecondaryButton>
          <PrimaryButton onClick={() => nav(`/${serviceType}/trip`)}>Lihat perjalanan</PrimaryButton>
        </div>
      </div>
    </div>
  );
}
