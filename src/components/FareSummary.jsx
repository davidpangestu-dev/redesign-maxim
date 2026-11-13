import React from "react";
export default function FareSummary({ fare = 12000, discount = 5000, total = 7000 }) {
  return (
    <div className="fare-card">
      <div>
        <span>Harga perjalanan</span>
        <strong>Rp{fare.toLocaleString("id-ID")}</strong>
      </div>
      {discount > 0 && (
        <div className="discount">
          <span>Diskon promo</span>
          <strong>-Rp{discount.toLocaleString("id-ID")}</strong>
        </div>
      )}
      <div className="fare-total">
        <span>Total</span>
        <strong>Rp{total.toLocaleString("id-ID")}</strong>
      </div>
    </div>
  );
}
