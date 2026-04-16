import { Link } from "react-router-dom";
import "./Cart.css";

function Cart({ productstatelist, setProductstatelist }) {
  return (
    <>
      <div className="mainContainer">
        <div className="cartContainer"></div>

        <div style={{ height: "100%" }}>
          <div
            className="Cart"
            style={{
              fontFamily: "Jost",
              textAlign: "center",
              fontSize: "xx-Large",
            }}
          >
            {" "}
            CART
          </div>
          <div className="section-stack" style={{ height: "7vh" }}></div>
          <div className="cart-bar">
            <ul>
              <li>PRODUCT</li>
              <li>QUANTITY</li>
              <li>PRODUCT</li>
            </ul>
          </div>
          <hr />

          <div className="product-container">
            <div className="product-card">
              {/* LEFT - IMAGE */}
              <div className="product-image">
                <img
                  src="https://m.media-amazon.com/images/I/31wlASjrKBL._SY300_SX300_QL70_FMwebp_.jpg"
                  alt="lipstick"
                />
              </div>

              {/* RIGHT - DETAILS */}
              <div className="product-details">
                <h2 className="title"> {productstatelist?.Name}</h2>
                <p className="price">RS. {productstatelist?.Price}  </p>
                <p className="shade">01 SANTORINI SUNSET</p>
              </div>
            </div>
          </div>
          <div>
            <div className="cartTitle">
              <div>
                <p>
                  {productstatelist?.img && (
                    <img
                      src={productstatelist.img}
                      style={{
                        display: "block",
                        width: "7rem",
                        height: "7rem",
                        margin: "2rem",
                      }}
                    ></img>
                  )}

                  <br />
                  
                </p>
              </div>
            </div>
            <div className="cartPrice"></div>
            <div className="cartCount"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
