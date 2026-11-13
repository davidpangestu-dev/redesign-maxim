import React from 'react';
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { menuItems } from "../data/mockData";
import PrimaryButton from "../components/PrimaryButton";

export default function Restaurant({ cart, setCart }) {
  const nav = useNavigate();

  const add = (id) => {
    setCart((c) => ({
      ...c,
      [id]: (c[id] || 0) + 1,
    }));
  };

  const totalItems = Object.values(cart || {}).reduce((a, b) => a + b, 0);

  return (
    <div className="page">
      <Header title="Warung Nusantara" back />

      <div className="restaurant-hero">
        <span>🍛</span>
      </div>

      <div className="restaurant-info">
        <h1>Warung Nusantara</h1>
        <p>⭐ 4.8 · 25–35 min · Mulai Rp15.000</p>
      </div>

      <div className="chips">
        {["Populer", "Nasi", "Ayam", "Minuman"].map((x, i) => (
          <button className={"chip " + (i === 0 ? "active" : "")} key={x}>
            {x}
          </button>
        ))}
      </div>

      <div className="menu-list">
        {menuItems.map((item) => (
          <div className="food-item" key={item.id}>
            <span className="food-emoji">{item.emoji}</span>

            <div className="food-copy">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <strong>Rp{item.price.toLocaleString("id-ID")}</strong>
            </div>

            <button className="add-btn" onClick={() => add(item.id)}>
              +{cart?.[item.id] ? ` ${cart[item.id]}` : ""}
            </button>
          </div>
        ))}
      </div>

      <div className="sticky-cta">
        <PrimaryButton onClick={() => nav("/food/cart")}>
          Lihat Keranjang
          {totalItems > 0 ? ` (${totalItems})` : ""}
        </PrimaryButton>
      </div>
    </div>
  );
}
