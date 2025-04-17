import React from "react";

function CategoryFilter( {categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="categories">
    {categories.map((category) => (
      <button
        key={category}
        className={selectedCategory === category ? "selected" : ""}
        onClick={() => onSelectCategory(category)}
        >
          {category}
      </button>
    ))}
      {/* <h5>Category filters</h5> */}
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
