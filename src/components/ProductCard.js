import React, { useState,useContext } from "react";
// import ImagePopup from './styles.css';
import { Link, useParams } from "react-router-dom";
import {globalstate} from "../Context"
import heart from "../assets/heart.png"

function ProductCard({ productImage }) {
  const [size, setSize] = useState("m");
  const [showPopup, setShowPopup] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
  let { count, setCount} = useContext(globalstate);

  const id = useParams();

  const handleMouseEnter = (event) => {
    setShowPopup(true);
    setPopupPosition({
      x: event.nativeEvent.offsetX,
      y: event.nativeEvent.offsetY,
    });
  };

  const handleMouseLeave = () => {
    setShowPopup(false);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.id);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="container_header">
          <div className="bg"></div>

          <Link  to={`/product/${id}`}>
            {/* <img src={heart} alt="heart image" className="heart_icon" />   */}
            <img
              className="productcard_img"
              src={productImage}
              alt=""
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseEnter}
             />
            </Link>
          {/* {showPopup && (
            <ImagePopup
              imageSrc={productImage}
              position={popupPosition}
              onClose={handleMouseLeave}
            />
          )} */}
        </div>
        <div className="bottom">
          <div className="updata">
            <h1 className="name">Diamond Ring</h1>
            <div className="shoe-size">
              <label htmlFor="s">
                <input
                  type="radio"
                  name="size"
                  id="s"
                  checked={size === "s"}
                  onChange={handleSizeChange}
                />
                <span>36mm</span>
              </label>
              <label htmlFor="m">
                <input
                  type="radio"
                  name="size"
                  id="m"
                  checked={size === "m"}
                  onChange={handleSizeChange}
                />
                <span>40mm</span>
              </label>
              <label htmlFor="l">
                <input
                  type="radio"
                  name="size"
                  id="l"
                  checked={size === "l"}
                  onChange={handleSizeChange}
                />
                <span>44mm</span>
              </label>
            </div>
            <div className="description">
              Lorem ipsum dolor sit amsen queti consecter narl.
            </div>
          </div>
          <div className="btn_style">
            <button className="buy">Add to cart</button>
            <button className="buy" onClick={()=>setCount(count+1)}>Buy now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
