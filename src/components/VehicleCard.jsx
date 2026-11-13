import React from "react";
import { Bike, CarFront } from "lucide-react";
export default function VehicleCard({ type, selected, onClick }) {
  const bike = type === "Bike",
    Icon = bike ? Bike : CarFront;
  return (
    <button className={"vehicle-card " + (selected ? "selected" : "")} onClick={onClick}>
      <span className="vehicle-icon">
        <Icon size={22} />
      </span>
      <span>
        <strong>{type}</strong>
        <small>{bike ? "Cepat & hemat" : "Nyaman & luas"}</small>
      </span>
      <span className="radio">{selected ? "✓" : ""}</span>
    </button>
  );
}
