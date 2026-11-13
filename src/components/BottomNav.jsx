import React from "react";
import { Home, Activity, Heart, Menu as MenuIcon } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const items = [
  ["/", "Beranda", Home],
  ["/activity", "Aktivitas", Activity],
  ["/favorites", "Favorit", Heart],
  ["/menu", "Menu", MenuIcon],
];

export default function BottomNav() {
  const loc = useLocation();
  const nav = useNavigate();

  return (
    <nav className="bottom-nav">
      {items.map(([path, label, Icon]) => (
        <button key={path} className={"nav-item " + (loc.pathname === path ? "active" : "")} onClick={() => nav(path)}>
          <Icon size={20} />
          <span>{label}</span>
        </button>
      ))}
    </nav>
  );
}
