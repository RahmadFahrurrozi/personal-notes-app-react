import React from "react";

export default function SearchBar({ keyword, keywordChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Cari catatan..."
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
        className="search-input"
      />
    </div>
  );
}
