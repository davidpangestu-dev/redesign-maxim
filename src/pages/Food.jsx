import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import PromoCard from "../components/PromoCard";
import { restaurants } from "../data/mockData";
import { useNavigate } from "react-router-dom";
export default function Food() {
  const nav = useNavigate();
  return (
    <div className="page">
      <Header title="Food" back />
      <SearchBar placeholder="Cari makanan atau restoran" />
      <div className="chips">
        {["Semua", "Nasi", "Ayam", "Burger", "Minuman", "Snack"].map((x) => (
          <button className={x === "Semua" ? "chip active" : "chip"} key={x}>
            {x}
          </button>
        ))}
      </div>
      <PromoCard promo={{ tag: "FOOD", title: "Diskon Rp20.000", subtitle: "untuk pesanan hari ini", color: "dark" }} onClick={() => nav("/promos")} />
      <h2 className="section-title">Restoran populer</h2>
      <div className="restaurant-list">
        {restaurants.map((r) => (
          <button className="restaurant-card" key={r.id} onClick={() => nav("/food/restaurant")}>
            <div className="food-hero">{r.emoji}</div>
            <div>
              <h3>{r.name}</h3>
              <p>
                ⭐ {r.rating} · {r.time}
              </p>
              <small>{r.price}</small>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
