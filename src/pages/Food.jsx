import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import PromoCard from "../components/PromoCard";
import { menuItems, promos } from "../data/mockData";

const categories = ["Semua", "Makanan", "Minuman"];

export default function Food({ cart, setCart }) {
  const nav = useNavigate();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Semua");
  const cartCount = Object.values(cart || {}).reduce((total, quantity) => total + quantity, 0);
  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = category === "Semua" || item.category === category;
    const searchText = `${item.name} ${item.description}`.toLowerCase();
    return matchesCategory && searchText.includes(query.trim().toLowerCase());
  });
  const foodPromo = promos.find((promo) => promo.id === "food20");

  const addToCart = (event, item) => {
    event.stopPropagation();
    setCart((current) => ({ ...current, [item.id]: (current[item.id] || 0) + 1 }));
  };

  return (
    <div className="page food-page">
      <Header
        title="Food"
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

      <div className="food-intro">
        <span className="eyebrow">PILIHAN HARI INI</span>
        <h1>Makan enak, tinggal pesan.</h1>
        <p>Temukan menu favorit dan pesan langsung dari sini.</p>
      </div>

      <SearchBar
        placeholder="Cari makanan atau minuman"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

      <div className="chips food-categories" aria-label="Kategori menu">
        {categories.map((itemCategory) => (
          <button
            className={"chip " + (category === itemCategory ? "active" : "")}
            key={itemCategory}
            onClick={() => setCategory(itemCategory)}
            aria-pressed={category === itemCategory}
          >
            {itemCategory}
          </button>
        ))}
      </div>

      {foodPromo && (
        <div className="food-promo">
          <PromoCard promo={foodPromo} onClick={() => nav("/promos")} />
        </div>
      )}

      <div className="food-section-heading">
        <div>
          <h2>Menu favorit</h2>
          <p>{filteredItems.length} pilihan untukmu</p>
        </div>
      </div>

      {filteredItems.length > 0 ? (
        <div className="food-menu-grid">
          {filteredItems.map((item) => (
            <article className="food-product-card" key={item.id}>
              <button
                className="food-product-link"
                onClick={() => nav(`/food/item/${item.id}`)}
                aria-label={`Lihat detail ${item.name}`}
              >
                <span className="food-product-art">
                  <span className="food-product-emoji">{item.emoji}</span>
                  <span className="food-category-tag">{item.category}</span>
                </span>
                <span className="food-product-copy">
                  <span className="food-rating">★ {item.rating}</span>
                  <strong className="food-product-name">{item.name}</strong>
                  <span className="food-product-description">{item.description}</span>
                  <strong className="food-product-price">Rp{item.price.toLocaleString("id-ID")}</strong>
                </span>
              </button>
              <button
                className="product-add-button"
                aria-label={`Tambah ${item.name} ke keranjang`}
                onClick={(event) => addToCart(event, item)}
              >
                +
              </button>
            </article>
          ))}
        </div>
      ) : (
        <div className="food-no-results">
          <span>🔎</span>
          <strong>Menu tidak ditemukan</strong>
          <p>Coba kata kunci atau kategori lain.</p>
        </div>
      )}
    </div>
  );
}
