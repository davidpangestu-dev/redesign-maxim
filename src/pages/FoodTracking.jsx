import React from "react";
import Header from "../components/Header";
import StatusStepper from "../components/StatusStepper";
import MapMock from "../components/MapMock";
export default function FoodTracking() {
  return (
    <div className="page flush">
      <Header title="Pesanan kamu" back />
      <MapMock active />
      <div className="tracking-panel">
        <div className="status-pill success">● Sedang diproses</div>
        <h2>Warung Nusantara</h2>
        <p className="muted">Pesananmu sedang disiapkan.</p>
        <StatusStepper active={2} />
      </div>
    </div>
  );
}
