import React, { useState } from "react";
import "./styles.css";
import earrings1 from "../assets/earrings1.png";
import necklace1 from "../assets/necklace1.png";
import ring1 from "../assets/ring1.png";
import ring2 from "../assets/ring2.png";
const images = [earrings1, necklace1, ring1, ring2];


function Indidual_Product() {
  // form
  const [title, setTitle] = useState("");
  const [material, setMaterial] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data
    console.log({
      title,
      material,
      category,
      price,
      description,
    });
  };

  //   crousal
  const [startIndex, setStartIndex] = useState(0);

  const handlePrevious = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 5, 0));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 5, images.length - 5));
  };
  //   ______________________
  return (
    <div>
      <div className="Indidual_Product_mainstyle">
        {/* left div */}
        <div style={Indidual_Product_leftstyle}>
          {/* left main image */}

          <img src={earrings1} className="Indidual_Product_left_imagestyle" />

          {/* crousal */}
          <div className="Indidual_Product_crousalstyle">
            <div className="carousel">
              <div className="image-container">
                <div className="square_style" onClick={handlePrevious}>
                  <h1>&lt;</h1>
                </div>
                {images
                  .slice(startIndex, startIndex + 5)
                  .map((image, index) => (
                    <div key={index} className="square">
                      <img src={image} alt={`Image ${index}`} />
                    </div>
                  ))}
                <div className="square_style" onClick={handleNext}>
                  <h1>&gt;</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right side - form */}
        <div style={Indidual_Product_rightstyle}>
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <label htmlFor="material">Choose a material:</label>
            <select
              id="material"
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
              required
            >
              <option value="">Select material</option>
              <option value="Material 1">Material 1</option>
              <option value="Material 2">Material 2</option>
              <option value="Material 3">Material 3</option>
            </select>

            <label htmlFor="category">Choose a category:</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select category</option>
              <option value="Category 1">Category 1</option>
              <option value="Category 2">Category 2</option>
              <option value="Category 3">Category 3</option>
            </select>

            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />

            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <button type="submit" className="form-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const Indidual_Product_leftstyle = {
  height: "80vh",
  width: "450px",
};

const Indidual_Product_rightstyle = {
  height: "80vh",
  width: "450px",
};
export default Indidual_Product;
