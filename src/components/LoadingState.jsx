import React from "react";
export default function LoadingState({ label = "Memuat..." }) {
  return (
    <div className="loading-state">
      <div className="spinner"></div>
      <strong>{label}</strong>
    </div>
  );
}
