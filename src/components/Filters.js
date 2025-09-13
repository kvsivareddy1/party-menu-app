import React from "react";

const categories = ["STARTER", "MAIN COURSE", "DESSERT", "SIDES"];

export default function Filters({
  activeCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  vegOnly,
  nonVegOnly,
  onVegOnlyChange,
  onNonVegOnlyChange,
  selectedCounts,
  setVegOnly,
  setNonVegOnly,
}) {
  return (
    <div className="filters-bar">
      <div className="category-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={cat === activeCategory ? "tab active" : "tab"}
            onClick={() => onCategoryChange(cat)}
          >
            {cat}
            <span className="count-badge">{selectedCounts[cat] || 0}</span>
          </button>
        ))}
      </div>
      <input
        type="text"
        placeholder="Search dish for your party..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="search-bar"
      />
      <div className="toggle-row">
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={vegOnly}
            onChange={(e) => onVegOnlyChange(e.target.checked)}
          />
          <span className="slider veg"></span>
        </label>
        <span style={{ marginRight: "18px" }}>Veg</span>

        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={nonVegOnly}
            onChange={(e) => onNonVegOnlyChange(e.target.checked)}
          />
          <span className="slider nonveg"></span>
        </label>
        <span>Non-Veg</span>
      </div>

      {/* <label className="toggle-switch">
        <input
          type="checkbox"
          checked={vegOnly}
          onChange={(e) => onVegOnlyChange(e.target.checked)}
        />
        <span className="slider veg"></span>
      </label>
      <span style={{ marginRight: "18px" }}>Veg</span>

      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={nonVegOnly}
          onChange={(e) => onNonVegOnlyChange(e.target.checked)}
        />
        <span className="slider nonveg"></span>
      </label>
      <span>Non-Veg</span> */}
    </div>
  );
}
