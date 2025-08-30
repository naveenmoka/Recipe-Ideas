import React, { useState } from 'react';
import '../App.css'; 

export default function SearchBar({ onSearch, initial = '' }) {
  const [value, setValue] = useState(initial);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(value.trim());
      }}
      className="search-bar"
    >
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search by ingredient — e.g. chicken, tomato"
        className="search-input"
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
}

