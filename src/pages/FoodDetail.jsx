import React, { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import PrimaryButton from "../components/PrimaryButton";
import EmptyState from "../components/EmptyState";
import { menuItems } from "../data/mockData";

export default function FoodDetail({ cart, setCart }) {
  const { itemId } = useParams();
  const nav = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const item = menuItems.find((menuItem) => menuItem.id === itemId);
  const cartCount = Object.values(cart || {}).reduce((total, count) => total + count, 0);

  useEffect(() => {
    setQuantity(1);
  }, [itemId]);

  if (!item) {
    return (
      <div className="page">
        <Header title="Detail makanan" back />
        <EmptyState
          title="Menu tidak ditemukan"
          description="Menu yang kamu cari tidak tersedia."
          action={<PrimaryButton onClick={() => nav("/food")}>Kembali ke Food</PrimaryButton>}
        />
      </div>
    );
  }

  const addToCart = () => {
    setCart((current) => ({ ...current, [item.id]: (current[item.id] || 0) + quantity }));
    nav("/food/cart");
  };

  return (
    <div className="page food-detail-page">
      <Header
        title="Detail Makanan"
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
      <div className="food-detail-art">
        <span className="food-category-tag">{item.category}</span>
        <span className="food-detail-emoji">{item.emoji}</span>
        <span className="food-detail-rating">★ {item.rating}</span>
      </div>
      <div className="food-detail-copy">
        <span className="eyebrow">WARUNG NUSANTARA</span>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        <strong className="food-detail-price">Rp{item.price.toLocaleString("id-ID")}</strong>
      </div>
      <div className="quantity-section">
        <div>
          <strong>Jumlah pesanan</strong>
          <small>Atur jumlah sebelum ditambahkan</small>
        </div>
        <div className="quantity-control">
          <button
            onClick={() => setQuantity((current) => Math.max(1, current - 1))}
            aria-label="Kurangi jumlah"
            disabled={quantity <= 1}
          >
            −
          </button>
          <strong>{quantity}</strong>
          <button onClick={() => setQuantity((current) => current + 1)} aria-label="Tambah jumlah">
            +
          </button>
        </div>
      </div>
      <div className="detail-subtotal">
        <span>Subtotal pilihan</span>
        <strong>Rp{(item.price * quantity).toLocaleString("id-ID")}</strong>
      </div>
      <div className="sticky-cta">
        <PrimaryButton onClick={addToCart}>+ Keranjang</PrimaryButton>
      </div>
    </div>
  );
}
