import { useState } from "react";
import "./Products.css";
import lipstick from "./lipstick.jpg";
import { PlusSquare } from "iconoir-react";

const productsName = [
  {
    id: 1,
    img: lipstick,
    Name: "LIPSTICK",
    Price: 468,
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/31wlASjrKBL._SY300_SX300_QL70_FMwebp_.jpg",
    Name: "FOUNDATIONER",
    Price: 456,
  },
  {
    id: 3,
    img: "https://karatcart.com/cdn/shop/products/IMG_01411500x2000.jpg?v=1653734313&width=1100",
    Name: "EARRING",
    Price: 543,
  },
  {
    id: 4,
    img: "https://www.reneecosmetics.in/cdn/shop/files/FACEBASE_IlluminatingPrimer_01.jpg?v=1744718883&width=1646",
    Name: "PRIMER",
    Price: 345,
  },
];

function Products({ productstatelist, setProductstatelist }) {
  return (
    <>
      <div className="prodcutListingPage">
        {productsName.map((product) => (
          <span key={product}>
            <img src={product.img}></img>
            <br />
            <br />
            <p> Rs. {product.Price}</p>
            <br />
            <button
              onClick={() => {
                console.log("products is " + productstatelist);
                setProductstatelist(product);
              }}
            >
              {product?.id === productstatelist?.id
                ? "ADDED PRODUCT"
                : "ADD TO CART"}
              <div
                style={{
                  position: "relative",
                  right: "-10px",
                  top: "-2px",
                }}
              >
                <PlusSquare />
              </div>
            </button>
          </span>
        ))}
      </div>
    </>
  );
}

export default Products;
