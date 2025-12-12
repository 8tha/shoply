import React from "react";
import "./FilterBar.css";

const FilterBar = ({
  searchTermFilter,
  setSearchTermFilter,
  categoryFilter,
  setCategoryFilter,
}) => {
  return (
    <div className="filter-bar">
      <input
        type="text"
        className="search-input"
        placeholder="search product..."
        value={searchTermFilter}
        onChange={(e) => {
          setSearchTermFilter(e.target.value);
        }}
      />
      <select
        className="filter-dropdown"
        value={categoryFilter}
        onChange={(e) => {
          setCategoryFilter(e.target.value);
        }}
      >
        <option>all</option>
        <option>men's clothing</option>
        <option>jewelery</option>
        <option>electronics</option>
        <option>women's clothing</option>
      </select>
    </div>
  );
};

export default FilterBar;
