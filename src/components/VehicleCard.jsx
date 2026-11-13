import React from "react";
import { Bike, CarFront } from "lucide-react";
export default function VehicleCard({ title, subtitle, price, serviceType, selected, onClick }) {
  const Icon = serviceType === "car" ? CarFront : Bike;
  return (
    <button
      className={"vehicle-card " + (selected ? "selected" : "")}
      onClick={onClick}
      aria-pressed={selected}
    >
      <span className="vehicle-icon">
        <Icon size={22} />
      </span>
      <span>
        <strong>{title}</strong>
        <small>{subtitle}</small>
        <small className="vehicle-fare">Estimasi Rp{price.toLocaleString("id-ID")}</small>
      </span>
      <span className="radio">{selected ? "✓" : ""}</span>
    </button>
  );
}
