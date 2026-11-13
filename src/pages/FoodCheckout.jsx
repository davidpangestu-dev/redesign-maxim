import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import PrimaryButton from "../components/PrimaryButton";
export default function FoodCheckout() {
  const nav = useNavigate();
  return (
    <div className="page">
      <Header title="Checkout" back />
      <div className="checkout-section">
        <h3>Alamat</h3>
        <button className="detail-row">
          📍 Rumah · Jl. Kaliurang No. 10 <span>›</span>
        </button>
      </div>
      <div className="checkout-section">
        <h3>Metode pembayaran</h3>
        <button className="detail-row">
          💵 Tunai <span>›</span>
        </button>
      </div>
      <div className="checkout-section">
        <h3>Promo</h3>
        <button className="detail-row">
          🏷️ Diskon Rp20.000 <span>✓</span>
        </button>
      </div>
      <div className="summary-card">
        <div>
          Pesanan <strong>Rp45.000</strong>
        </div>
        <div>
          Delivery Fee <strong>Rp7.000</strong>
        </div>
        <div className="discount">
          Promo <strong>-Rp17.000</strong>
        </div>
        <div className="fare-total">
          Total <strong>Rp35.000</strong>
        </div>
      </div>
      <PrimaryButton onClick={() => nav("/food/tracking")}>Pesan Sekarang</PrimaryButton>
    </div>
  );
}
