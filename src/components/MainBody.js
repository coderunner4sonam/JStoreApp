import React, { useState } from "react";
import ring1 from "../assets/ring1.png";
import necklace1 from "../assets/necklace1.png";
import earrings1 from "../assets/earrings1.png";
import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFilter";

function MainBody() {
  const [collectionData, setCollectionData] = useState([
    {
      productImage: ring1,
      productName: "Diamond Ring",
      productPrice: 7000,
      productDescription: "",
      quantityIngm: 5,
    },
    {
      productImage: necklace1,
      productName: "Diamond Ring",
      productPrice: 7000,
      productDescription: "",
      quantityIngm: 5,
    },
    {
      productImage: earrings1,
      productName: "Diamond Ring",
      productPrice: 7000,
      productDescription: "",
      quantityIngm: 5,
    },
  ]);

  return (
    <div>
        <div className="product_filter_style">
         <ProductFilter />
        </div>

        <div className="mainbody">
          {[...Array(50)].map((ele, idx) => (
            //rendering each card

            // <Card
            //     productImage={ele.productImage}
            //     productName={ele.productName}
            //     productPrice={ele.productPrice}
            //     quantityIngm={ele.quantityIngm}
            //     productDescription={ele.productDescription}
            // />
            <ProductCard
              key={idx + idx}
              productImage={collectionData[idx < 3 ? idx : 0].productImage}
            />
          ))}
        </div>
    </div>

  );
}

export default MainBody;
