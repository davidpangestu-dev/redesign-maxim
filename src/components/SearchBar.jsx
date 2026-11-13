import React from "react";
import { Search } from "lucide-react";
export default function SearchBar({ placeholder }) {
  return (
    <div className="search-bar">
      <Search size={19} />
      <input aria-label={placeholder} placeholder={placeholder} />
    </div>
  );
}
