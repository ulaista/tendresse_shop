import React, { useState } from "react";

const PriceSlider = ({ min, max, onPriceChange }) => {
  const [minPrice, setMinPrice] = useState(min);
  const [maxPrice, setMaxPrice] = useState(max);

  const handleMinPriceChange = (event) => {
    const newValue = Math.min(Number(event.target.value), maxPrice - 100);
    setMinPrice(newValue);
    onPriceChange({ min: newValue, max: maxPrice });
  };

  const handleMaxPriceChange = (event) => {
    const newValue = Math.max(Number(event.target.value), minPrice + 100);
    setMaxPrice(newValue);
    onPriceChange({ min: minPrice, max: newValue });
  };

  return (
    <div className="flex flex-col space-y-2">
      <input
        type="range"
        min={min}
        max={max}
        value={minPrice}
        onChange={handleMinPriceChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxPrice}
        onChange={handleMaxPriceChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
      <div className="text-center">
        От {minPrice} до {maxPrice}
      </div>
    </div>
  );
};

export default PriceSlider;