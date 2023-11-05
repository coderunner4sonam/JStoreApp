import React, { useState, useRef } from "react";

const CategoryComponent = () => {
  const categories = [
    "Best Sellers",
    "New Arrivals",
    "Rings",
    "Earrings",
    "Bracelets & Bangles",
    "Solitaires",
    "Special Deals",
    "Others Jewellery",
    "Gifting",
  ];

  const [isMobileView, setIsMobileView] = useState(false);
  const sliderRef = useRef(null);

  const handleResize = () => {
    const isMobile = window.innerWidth <= 768;
    setIsMobileView(isMobile);
  };

  const slideToLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 200; // Adjust the scrolling distance as needed
    }
  };

  const slideToRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 200; // Adjust the scrolling distance as needed
    }
  };

  // Add event listener to handle resize
  useState(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="slider" ref={sliderRef}>
      {categories.map((category, index) => (
        <div className="categories_style" key={index}>
          {category}
        </div>
      ))}
    </div>
  );
};

export default CategoryComponent;
