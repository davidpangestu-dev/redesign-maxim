import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import PrimaryButton from "../components/PrimaryButton";
import { menuItems } from "../data/mockData";
export default function FoodCart({ cart, setCart }) {
  const nav = useNavigate();
  const items = menuItems.filter((i) => cart[i.id]);
  const change = (id, d) => setCart((c) => ({ ...c, [id]: Math.max(0, (c[id] || 0) + d) }));
  const subtotal = items.reduce((s, i) => s + i.price * cart[i.id], 0);
  const delivery = 7000;
  const total = subtotal + delivery;
  return (
    <div className="page">
      <Header title="Keranjang" back />
      {items.length ? (
        <>
          <div className="cart-list">
            {items.map((i) => (
              <div className="cart-item" key={i.id}>
                <span className="food-emoji">{i.emoji}</span>
                <div>
                  <strong>{i.name}</strong>
                  <small>Rp{i.price.toLocaleString("id-ID")}</small>
                </div>
                <div className="qty">
                  <button onClick={() => change(i.id, -1)}>−</button>
                  <span>{cart[i.id]}</span>
                  <button onClick={() => change(i.id, 1)}>+</button>
                </div>
              </div>
            ))}
          </div>
          <div className="summary-card">
            <div>
              Subtotal <strong>Rp{subtotal.toLocaleString("id-ID")}</strong>
            </div>
            <div>
              Delivery Fee <strong>Rp7.000</strong>
            </div>
            <div className="fare-total">
              Total <strong>Rp{total.toLocaleString("id-ID")}</strong>
            </div>
          </div>
          <PrimaryButton onClick={() => nav("/food/checkout")}>Checkout</PrimaryButton>
        </>
      ) : (
        <div className="empty-state">
          <div className="empty-illustration">🛒</div>
          <h3>Keranjang masih kosong</h3>
          <p>Tambahkan makanan favoritmu.</p>
        </div>
      )}
    </div>
  );
}
