import React from "react";
import { Bell, UserCircle, ChevronRight, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import ServiceCard from "../components/ServiceCard";
import PromoCard from "../components/PromoCard";
import ActivityCard from "../components/ActivityCard";
import { services, promos, activity } from "../data/mockData";
export default function Home() {
  const nav = useNavigate();
  return (
    <div className="page home">
      <header className="home-head">
        <div>
          <div className="brand-mark">maxim</div>
          <p>Halo, David 👋</p>
        </div>
        <div className="header-actions">
          <button className="icon-btn">
            <Bell size={19} />
          </button>
          <button className="avatar-mini">
            <UserCircle size={23} />
          </button>
        </div>
      </header>
      <div className="hero-copy">
        <h1>
          Mau pergi atau
          <br />
          pesan apa?
        </h1>
        <SearchBar placeholder="Cari tujuan, layanan, atau tempat" />
      </div>
      <button className="hero-promo" onClick={() => nav("/promos")}>
        <span className="hero-badge">PROMO SPESIAL</span>
        <strong>Hemat hingga Rp15.000</strong>
        <span>untuk perjalanan Bike</span>
        <b>Gunakan sekarang</b>
      </button>
      <section>
        <div className="section-head">
          <h2>Layanan</h2>
          <button onClick={() => nav("/services")}>
            Lihat semua <ChevronRight size={16} />
          </button>
        </div>
        <div className="service-grid">
          {services.slice(0, 4).map((s) => (
            <ServiceCard key={s.id} service={s} onClick={() => nav(s.path)} />
          ))}
        </div>
      </section>
      <section>
        <div className="section-head">
          <h2>Promo untuk kamu</h2>
          <button onClick={() => nav("/promos")}>
            Lihat semua <ChevronRight size={16} />
          </button>
        </div>
        <div className="promo-scroll home-promo-scroll">
          {promos.slice(0, 2).map((p) => (
            <PromoCard key={p.id} promo={p} onClick={() => nav("/promos")} />
          ))}
        </div>
      </section>
      <section>
        <div className="section-head">
          <h2>Aktivitas terakhir</h2>
          <button onClick={() => nav("/activity")}>
            Lihat semua <ChevronRight size={16} />
          </button>
        </div>
        <ActivityCard item={activity[0]} onClick={() => nav("/activity")} />
      </section>
    </div>
  );
}
