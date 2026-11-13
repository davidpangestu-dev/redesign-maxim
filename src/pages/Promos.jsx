import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import PromoCard from "../components/PromoCard";
import { promos } from "../data/mockData";
export default function Promos() {
  const [selected, setSelected] = useState("");
  return (
    <div className="page">
      <Header title="Promo" back />
      <p className="lead">Pilih promo terbaik untuk kebutuhanmu.</p>
      <div className="promo-list">
        {promos.map((p) => (
          <PromoCard key={p.id} promo={p} selected={selected === p.id} onClick={() => setSelected(selected === p.id ? "" : p.id)} />
        ))}
      </div>
      {selected && <div className="toast">Promo {selected} dipilih</div>}
    </div>
  );
}
