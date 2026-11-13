import React from "react";
export default function FareSummary({ discount = 5000, total = 7000 }) {
  return (
    <div className="fare-card">
      <div>
        <span>Harga perjalanan</span>
        <strong>Rp12.000</strong>
      </div>
      <div className="discount">
        <span>Diskon promo</span>
        <strong>-Rp{discount.toLocaleString("id-ID")}</strong>
      </div>
      <div className="fare-total">
        <span>Total</span>
        <strong>Rp{total.toLocaleString("id-ID")}</strong>
      </div>
    </div>
  );
}
