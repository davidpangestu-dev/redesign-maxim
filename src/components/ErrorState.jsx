import React from "react";
import PrimaryButton from "./PrimaryButton";
export default function ErrorState({ onRetry }) {
  return (
    <div className="empty-state">
      <div className="empty-illustration">!</div>
      <h3>Terjadi kesalahan</h3>
      <p>Maaf, sesuatu tidak berjalan sesuai rencana.</p>
      <PrimaryButton onClick={onRetry}>Coba lagi</PrimaryButton>
    </div>
  );
}
