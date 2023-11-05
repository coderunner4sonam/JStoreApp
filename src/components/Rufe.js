import React, { useState } from 'react';

const Rufe = () => {
  const categories = [
    '-',
    'Best Sellers',
    'New Arrivals',
    'Rings',
    'Earrings',
    'Bracelets & Bangles',
    'Solitaires',
    'Special Deals',
    'Others Jewellery',
    'Gifting',
  ];

  const [isMobileView, setIsMobileView] = useState(false);

  const handleResize = () => {
    const isMobile = window.innerWidth <= 768;
    setIsMobileView(isMobile);
  };

  // Add event listener to handle resize
  useState(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="category-component" style={{ height: '60px' }}>
      <ul className={isMobileView ? 'mobile-view' : 'desktop-view'}>
        {categories.map((category, index) => (
          <li key={index} className="categories_style">{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default Rufe;
