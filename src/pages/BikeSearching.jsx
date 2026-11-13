import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import MapMock from "../components/MapMock";
import LoadingState from "../components/LoadingState";
import SecondaryButton from "../components/SecondaryButton";
import { getRidePricing, getRideSelection } from "../data/rideOptions";
export default function BikeSearching({ serviceType = "bike", selection }) {
  const nav = useNavigate();
  const selected = getRideSelection(serviceType, selection);
  const pricing = getRidePricing(selected);
  const serviceName = serviceType === "car" ? "Car" : "Bike";
  return (
    <div className="page flush">
      <Header title={`Mencari ${serviceName}...`} back />
      <MapMock />
      <div className="searching-panel">
        <LoadingState label={`Mencari ${selected.name}...`} />
        <p>Mohon tunggu sebentar</p>
        <p>Estimasi Rp{pricing.total.toLocaleString("id-ID")}</p>
        <SecondaryButton onClick={() => nav(`/${serviceType}/driver`)}>Simulasikan Driver Ditemukan</SecondaryButton>
      </div>
    </div>
  );
}
