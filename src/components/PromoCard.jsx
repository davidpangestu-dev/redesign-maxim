import React from "react";
export default function PromoCard({ promo, onClick, selected = false }) {
  return (
    <button onClick={onClick} className={"promo-card " + promo.color + " " + (selected ? "selected" : "")}>
      <span className="promo-tag">{promo.tag}</span>
      <strong>{promo.title}</strong>
      <span>{promo.subtitle}</span>
      <small>{selected ? "Dipilih" : "Gunakan sekarang →"}</small>
    </button>
  );
}
