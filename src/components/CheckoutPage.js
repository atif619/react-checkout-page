import React from "react";
import ShippingInformation from "./ShippingInformation/ShippingInformation";
import PaymentDeliveryMethod from "./PaymentDeliveryMethod/PaymentDeliveryMethod";
import CartItems from "./Cart/CartItems";

const CheckoutPage = () => {
  return (
    <>
      <section className="py-5">
        <div className="container ">
          <div className="d-flex justify-content-between text-center flex-md-row flex-column ">
            <h5>Shipping and Payment</h5>
            <div>
              <i className="bi bi-cart3 cart d-inline-block"></i>
              <div className="d-inline-block line mx-3"></div>
              <i className="bi bi-truck shipment active d-inline-block "></i>
            </div>
          </div>

          <div className="row gx-4 my-5">
            <div className="col-xxl-5 col-lg-7">
              <div className="">
                <ShippingInformation />
              </div>
            </div>
            <div className="col-xxl-4 col-lg-5 my-xl-0 my-5">
              <div className="">
                <PaymentDeliveryMethod />
              </div>
            </div>
            <div className="col-xxl-3 col-lg-5 col-12">
              <div className="">
                <CartItems />
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-between flex-md-row flex-column align-items-center pt-5">
            <div className="order-md-1 order-2 mt-md-0 mt-4">
              <a href="#" className="text-decoration-none fw-bold text-black">
                <i className="bi bi-arrow-left me-3 fw-bolder"></i> Back
              </a>
            </div>
            <div className="order-md-2 order-1">
              <a
                href="#"
                className="d-inline-block me-4 px-lg-5 py-lg-3 px-4 py-2 sm-mb-0 mb-3 active rounded-pill border text-decoration-none"
              >
                Continue Shopping
              </a>
              <a
                href="#"
                className="d-inline-block border px-lg-5 py-lg-3 px-4 py-2 rounded-pill text-black text-decoration-none"
              >
                Proceed to Payment
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckoutPage;
