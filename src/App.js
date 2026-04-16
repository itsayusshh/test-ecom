import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import JumbroTron from "./Jumbo Tron/JumboTron";
import Products from "./Products/Products.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Cart/Cart.js";
import { useState } from "react";

function App() {
  const [productstate, setProductstate] = useState(null);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/cart"
            element={
              <Cart
                productstatelist={productstate}
                setProductstatelist={setProductstate}
              />
            }
          ></Route>
          <Route
            path="/"
            element={
              <>
                <JumbroTron />
                <Products
                  productstatelist={productstate}
                  setProductstatelist={setProductstate}
                />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
      <p style={{ textAlign: "center" }}>
        This project is a clone created for educational purposes only. It is not
        affiliated with Sugar Cosmetics.
      </p>
    </>
  );
}

export default App;
