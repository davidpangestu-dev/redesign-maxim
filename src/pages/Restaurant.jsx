import React from "react";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import PrimaryButton from "../components/PrimaryButton";
import { menuItems } from "../data/mockData";

export default function Restaurant({ cart, setCart }) {
  const nav = useNavigate();
  const cartCount = Object.values(cart || {}).reduce((total, quantity) => total + quantity, 0);

  const addToCart = (item) => {
    setCart((current) => ({ ...current, [item.id]: (current[item.id] || 0) + 1 }));
  };

  return (
    <div className="page">
      <Header
        title="Warung Nusantara"
        back
        action={
          <button
            className="cart-header-button"
            aria-label={`Buka keranjang, ${cartCount} item`}
            onClick={() => nav("/food/cart")}
          >
            <ShoppingCart size={21} />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
        }
      />

      <div className="restaurant-hero">
        <span>🍛</span>
      </div>
      <div className="restaurant-info">
        <h1>Warung Nusantara</h1>
        <p>⭐ 4.8 · 25–35 min · Mulai Rp5.000</p>
      </div>
      <h2 className="section-title">Menu tersedia</h2>
      <div className="menu-list">
        {menuItems.map((item) => (
          <div className="food-item" key={item.id}>
            <button className="food-item-main" onClick={() => nav(`/food/item/${item.id}`)}>
              <span className="food-emoji">{item.emoji}</span>
              <span className="food-copy">
                <strong>{item.name}</strong>
                <small className="food-rating">★ {item.rating} · {item.category}</small>
                <span>{item.description}</span>
                <strong>Rp{item.price.toLocaleString("id-ID")}</strong>
              </span>
            </button>
            <button
              className="add-btn"
              onClick={() => addToCart(item)}
              aria-label={`Tambah ${item.name} ke keranjang`}
            >
              +{cart?.[item.id] ? ` ${cart[item.id]}` : ""}
            </button>
          </div>
        ))}
      </div>
      <div className="sticky-cta">
        <PrimaryButton onClick={() => nav("/food/cart")}>
          <ShoppingCart size={18} />
          {cartCount > 0 ? ` Keranjang (${cartCount})` : " Lihat Keranjang"}
        </PrimaryButton>
      </div>
    </div>
  );
}
