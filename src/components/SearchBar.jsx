import React from "react";
import { Search } from "lucide-react";
export default function SearchBar({ placeholder, value, onChange }) {
  return (
    <div className="search-bar">
      <Search size={19} />
      <input aria-label={placeholder} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
}
