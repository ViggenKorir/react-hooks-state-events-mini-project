import React from "react";

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="categories">
      <h5>Category Filters</h5>
      {categories.map((category) => (
        <CategoryButton
          key={category}
          category={category}
          isSelected={selectedCategory === category}
          onClick={onCategoryChange}
        />
      ))}
    </div>
  );
};

const CategoryButton = ({ category, isSelected, onClick }) => (
  <button
    className={isSelected ? "selected" : ""}
    onClick={() => onClick(category)}
  >
    {category}
  </button>
);

export default CategoryFilter;
