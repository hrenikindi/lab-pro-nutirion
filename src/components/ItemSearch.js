import React, { useState } from "react";

const ItemSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search for a food..."
        value={searchTerm}
        onChange={(event) => handleChange(event)}
        onKeyDown={(event) => handleChange(event)}
      />
    </div>
  );
};

export default ItemSearch;
