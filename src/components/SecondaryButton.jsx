import React from "react";
export default function SecondaryButton({ children, onClick }) {
  return (
    <button className="btn btn-secondary" onClick={onClick}>
      {children}
    </button>
  );
}
