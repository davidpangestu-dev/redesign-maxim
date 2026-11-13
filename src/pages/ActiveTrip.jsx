import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import MapMock from "../components/MapMock";
import PrimaryButton from "../components/PrimaryButton";
export default function ActiveTrip() {
  const nav = useNavigate();
  return (
    <div className="page flush">
      <Header title="Perjalanan berlangsung" back />
      <MapMock active />
      <div className="trip-panel">
        <div className="status-pill success">● Perjalanan berlangsung</div>
        <div className="eta">
          <strong>12 menit</strong>
          <span>perkiraan tiba</span>
        </div>
        <div className="driver-card">
          <div className="driver-avatar">R</div>
          <div className="driver-main">
            <h2>Rizky</h2>
            <p>Yamaha · AB 1234 XX</p>
          </div>
        </div>
        <div className="route-mini">
          <span>Lokasi saya</span>
          <span>Jl. Malioboro, Yogyakarta</span>
        </div>
        <PrimaryButton onClick={() => nav("/bike/completed")}>Selesaikan perjalanan</PrimaryButton>
      </div>
    </div>
  );
}
