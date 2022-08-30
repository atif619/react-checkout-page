import React from "react";
import CartItem1 from "../../assets/cartItem1.png";
import CartItem2 from "../../assets/cartItem2.png";

const CartItems = () => {
  return (
    <>
      <div className="container">
        <div>
          <h5>Your Cart</h5>
        </div>
        <div className="row g-3 align-items-center my-4">
          <div className="col-lg-3">
            <div className="">
              <img src={CartItem1} alt="CartItems1" className="cartItems" />
            </div>
          </div>
          <div className="col-lg-9 d-flex justify-content-between align-items-center">
            <div className="">
              <p className="m-0">T-shirt</p>
              <p className="m-0">Summer Vibes</p>
              <span className="item-code">#212315</span>
            </div>
            <div>
              <span>$89.99</span>
            </div>
          </div>
        </div>
        <div className="row g-3 align-items-center my-4">
          <div className="col-lg-3">
            <div className="">
              <img src={CartItem2} alt="CartItem2" className="cartItems" />
            </div>
          </div>
          <div className="col-lg-9 d-flex justify-content-between align-items-center">
            <div className="">
              <p className="m-0">Basic Slim</p>
              <p className="m-0">Fit T-shirt</p>
              <span className="item-code">#212315</span>
            </div>
            <div>
              <span>$69.99</span>
            </div>
          </div>
        </div>

        <div className="totalCartValue mt-5 px-4 py-4 rounded-pill d-flex justify-content-evenly">
          <span>Total Cost</span>
          <span className="fw-bold">$159.98</span>
        </div>

        <div className="text-center px-5 mt-5">
          <div className="d-flex ">
            <i class="bi bi-truck me-3"></i>
            <p>You are $30.58 away from free delivery</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItems;
