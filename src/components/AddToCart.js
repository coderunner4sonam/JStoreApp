import React from 'react';

const ProductCard = ({ product }) => {
  const { image, name, size, quantity, price, soldBy, freeDelivery } = product;

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-info">Size: {size}</p>
      <p className="product-info">Quantity: {quantity}</p>
      <p className="product-info">Price: {price}</p>
      <p className="product-info">Sold By: {soldBy}</p>
      {freeDelivery && <p className="product-info">Free Delivery</p>}
      <button className="edit-button">Edit</button>
      <button className="remove-button">Remove</button>
    </div>
  );
};

const AddToCart = () => {
  const products = [
    {
      id: 1,
      image: 'product1.jpg',
      name: 'Product 1',
      size: 'XL',
      quantity: 2,
      price: '$19.99',
      soldBy: 'Seller 1',
      freeDelivery: true,
    },
    // Add more products here...
  ];

  const totalPrice = products.reduce((total, product) => {
    return total + parseFloat(product.price.replace('$', ''));
  }, 0);

  const totalQuantity = products.reduce((total, product) => {
    return total + product.quantity;
  }, 0);

  const handleContinue = () => {
    // Handle continue button click
  };

  return (
    <div className="add-to-cart">
      <div className="left-side">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="right-side">
        <div className="price-details">
          <h2>Price Details</h2>
          <p>Total Product(s): {totalQuantity}</p>
          <p>Order Total: ${totalPrice.toFixed(2)}</p>
        </div>
        <button className="continue-button" onClick={handleContinue}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
