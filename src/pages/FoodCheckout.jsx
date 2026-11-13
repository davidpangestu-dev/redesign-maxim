import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import PrimaryButton from "../components/PrimaryButton";
import { menuItems } from "../data/mockData";
export default function FoodCheckout({ cart = {} }) {
  const nav = useNavigate();
  const items = menuItems.filter((item) => cart[item.id] > 0);
  const subtotal = items.reduce((total, item) => total + item.price * cart[item.id], 0);
  const delivery = items.length > 0 ? 7000 : 0;
  const total = subtotal + delivery;
  return (
    <div className="page">
      <Header title="Checkout" back />
      {items.length > 0 ? (
        <>
          <div className="checkout-section">
            <h3>Pesanan kamu</h3>
            <div className="checkout-items">
              {items.map((item) => (
                <div className="checkout-item" key={item.id}>
                  <span>{cart[item.id]}× {item.name}</span>
                  <strong>Rp{(item.price * cart[item.id]).toLocaleString("id-ID")}</strong>
                </div>
              ))}
            </div>
          </div>
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
          <div className="summary-card">
            <div>
              Subtotal pesanan <strong>Rp{subtotal.toLocaleString("id-ID")}</strong>
            </div>
            <div>
              Ongkir <strong>Rp{delivery.toLocaleString("id-ID")}</strong>
            </div>
            <div className="fare-total">
              Total <strong>Rp{total.toLocaleString("id-ID")}</strong>
            </div>
          </div>
          <PrimaryButton onClick={() => nav("/food/tracking")}>Pesan Sekarang</PrimaryButton>
        </>
      ) : (
        <div className="empty-state">
          <div className="empty-illustration">🛒</div>
          <h3>Belum ada pesanan</h3>
          <p>Tambahkan menu ke keranjang sebelum checkout.</p>
          <PrimaryButton onClick={() => nav("/food")}>Pilih makanan</PrimaryButton>
        </div>
      )}
    </div>
  );
}
