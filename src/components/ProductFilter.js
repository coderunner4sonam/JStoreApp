import React from 'react';

const ProductFilter = () => {
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    console.log('Selected option:', selectedValue);
    // You can perform any other logic here based on the selected option
  };

  return (
    <div>
      <label htmlFor="price-filter">Sort by:</label>
      <select id="price-filter" onChange={handleSelectChange}>
        <option value="highToLow">Price: high to low</option>
        <option value="lowToHigh">Price: low to high</option>
        <option value="popularity">Popularity</option>
        <option value="newest">Newest first</option>
        <option value="customerRatings">Customer Ratings</option>
        <option value="betterDiscount">Better Discount</option>
      </select>
    </div>
  );
};

export default ProductFilter;
