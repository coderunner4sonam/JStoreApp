import React, {useState} from "react";

function Card({ productImage, productName, productPrice, productDescription, quantityIngm }) {
  const [quantity, setQuantity] = useState(1);
  const [expand, sextExpand] = useState(true);
  return (
    <>
      {}
      {expand && (
        <div>
          <div className="product-details">
            <div className="product-image">
              <img src={productImage} alt={productName} />
            </div>
            <div className="product-info">
              <h2 className="product-name">{productName}</h2>
              <p className="product-price">{productPrice}</p>
              <p className="product-description">{productDescription}</p>
              <div className="quantity-control">
                <button className="quantity-btn minus">-</button>
                <input
                  type="number"
                  min="1"
                  max="10"
                  value="1"
                  className="quantity-input"
                />
                <button className="quantity-btn plus">+</button>
              </div>
              <button className="add-to-cart-btn">Add to Cart</button>
              <button className="buy-now-btn">Buy Now</button>
            </div>
          </div>
          <div className="cart-overlay">
            <div className="cart-popup">
              <div className="cart-header">
                <h2>Your Cart</h2>
                <button className="close-cart-btn">X</button>
              </div>
              <ul className="cart-items">
                <li className="cart-item">
                  <div className="cart-item-image">
                    <img src={productImage} alt={productName} />
                  </div>
                  <div className="cart-item-info">
                    <h3 className="cart-item-name">{productName}</h3>
                    <p className="cart-item-price">{productPrice}</p>
                    <div className="quantity-control">
                      <button className="quantity-btn minus">-</button>
                      <input
                        type="number"
                        min="1"
                        max="10"
                        value="1"
                        className="quantity-input"
                        onChange={(e) => setQuantity(e.target.value)}
                      />
                      <button className="quantity-btn plus">+</button>
                    </div>
                  </div>
                  <button className="remove-from-cart-btn">X</button>
                </li>
              </ul>
              <div className="cart-total">
                <p>Total:</p>
                <p className="cart-total-price">{productPrice * quantity}</p>
              </div>
              <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
