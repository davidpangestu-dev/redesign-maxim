import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import MapMock from "../components/MapMock";
import PrimaryButton from "../components/PrimaryButton";
import { getRidePricing, getRideSelection } from "../data/rideOptions";
export default function ActiveTrip({ serviceType = "bike", selection }) {
  const nav = useNavigate();
  const selected = getRideSelection(serviceType, selection);
  const pricing = getRidePricing(selected);
  const serviceName = serviceType === "car" ? "Car" : "Bike";
  return (
    <div className="page flush">
      <Header title={`Perjalanan ${serviceName} berlangsung`} back />
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
            <p>{selected.vehicleInfo}</p>
          </div>
        </div>
        <div className="route-mini">
          <span>Lokasi saya</span>
          <span>Jl. Malioboro, Yogyakarta</span>
        </div>
        <div className="route-mini">
          <span>{selected.name} · Estimasi biaya</span>
          <strong>Rp{pricing.total.toLocaleString("id-ID")}</strong>
        </div>
        <PrimaryButton onClick={() => nav(`/${serviceType}/completed`)}>Selesaikan perjalanan</PrimaryButton>
      </div>
    </div>
  );
}
