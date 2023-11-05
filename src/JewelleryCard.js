import React from "react";

const JewelleryCard = ({ jewellery }) => {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={jewellery.image}
        alt={jewellery.name}
      />
      <div className="card-body">
        <h5 className="card-title">{jewellery.name}</h5>
        <p className="card-text">{jewellery.description}</p>
        <button className="btn">Buy Now</button>
      </div>
      <style jsx>{`
        .card {
          width: 100%;
          max-width: 300px;
          margin: 0 auto;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          overflow: hidden;
          transition: transform 0.2s ease-out;
        }

        .card:hover {
          transform: scale(1.02);
        }

        .card-img-top {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .card-body {
          padding: 16px;
          text-align: center;
        }

        .card-title {
          margin-bottom: 8px;
        }

        .btn {
          display: block;
          width: 100%;
          padding: 12px;
          border-radius: 8px;
          background-color: #007bff;
          color: #fff;
          border: none;
          outline: none;
          cursor: pointer;
          transition: background-color 0.2s ease-out;
        }

        .btn:hover {
          background-color: #0062cc;
        }
      `}</style>
    </div>
  );
};

export default JewelleryCard;
