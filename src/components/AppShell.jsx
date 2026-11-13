import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import BottomNav from "./BottomNav";

export default function AppShell() {
  const location = useLocation();

  const mainNav = ["/", "/activity", "/favorites", "/menu"];
  const showNav = mainNav.includes(location.pathname);

  return (
    <div className="app-shell">
      <main className="app-content">
        <Outlet />
      </main>

      {showNav && <BottomNav />}
    </div>
  );
}
