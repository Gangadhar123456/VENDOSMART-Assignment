import React from 'react';

const SortByRating = ({ onSortChange }) => {
  const handleSortChange = (event) => {
    const newSortBy = event.target.value;
    onSortChange(newSortBy);
  };

  return (
    <div className="sort-by-rating">
      <label htmlFor="rating-sort">Sort by rating:</label>
      <select id="rating-sort" onChange={handleSortChange}>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>
    </div>
  );
};

export default SortByRating;
