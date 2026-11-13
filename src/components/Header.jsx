import React from "react";
import { ArrowLeft, Bell, UserCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Header({ title, back = false, action }) {
  const nav = useNavigate();
  return (
    <header className="header">
      {back ? (
        <button className="icon-btn" onClick={() => nav(-1)} aria-label="Kembali">
          <ArrowLeft size={21} />
        </button>
      ) : (
        <div className="brand-mark">maxim</div>
      )}
      <div className="header-title">{title || ""}</div>
      {action ||
        (!back && (
          <div className="header-actions">
            <button className="icon-btn">
              <Bell size={19} />
            </button>
            <button className="avatar-mini">
              <UserCircle size={22} />
            </button>
          </div>
        ))}
    </header>
  );
}
