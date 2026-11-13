import React from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import PromoCard from "../components/PromoCard";
import { services, promos } from "../data/mockData";
import { useNavigate } from "react-router-dom";
export default function Services() {
  const nav = useNavigate();
  return (
    <div className="page">
      <Header title="Semua Layanan" back />
      <p className="lead">Temukan layanan yang sesuai kebutuhanmu</p>
      <h2 className="section-title">Transportasi</h2>
      <div className="stack">
        {services.slice(0, 2).map((s) => (
          <ServiceCard key={s.id} service={s} onClick={() => nav(s.path)} />
        ))}
      </div>
      <h2 className="section-title">Pengiriman</h2>
      <div className="stack">
        <ServiceCard service={services[2]} onClick={() => nav("/delivery")} />
      </div>
      <h2 className="section-title">Food & Shopping</h2>
      <div className="stack">
        {services.slice(3).map((s) => (
          <ServiceCard key={s.id} service={s} onClick={() => nav(s.path)} />
        ))}
      </div>
      <div className="small-promo">
        <PromoCard promo={promos[2]} onClick={() => nav("/promos")} />
      </div>
    </div>
  );
}
