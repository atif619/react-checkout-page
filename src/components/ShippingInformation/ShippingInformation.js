import React from "react";

const ShippingInformation = () => {
  return (
    <>
      <div className="auth-btns">
        <a
          href="#"
          className="d-inline-block w-auto px-lg-5 active py-lg-3 px-4 py-2 border me-4 rounded-pill text-decoration-none "
        >
          Log In
        </a>
        <a
          href="#"
          className="d-inline-block w-auto px-lg-5 py-lg-3 px-4 py-2 text-black border rounded-pill text-decoration-none"
        >
          Sign up
        </a>

        <div className="container p-0 mt-5">
          <div className="my-4">
            <h5>Shipping Information</h5>
          </div>
          <form action="#" className="w-full">
            <div className="row flex-wrap g-3">
              <div className="col-lg-6 col-md-6 col-12">
                <input
                  type="email"
                  class="form-control rounded-pill"
                  id="exampleFormControlInput1"
                  placeholder="Email"
                ></input>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <input
                  type="text"
                  class="form-control rounded-pill"
                  id="exampleFormControlInput1"
                  placeholder="Address"
                ></input>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <input
                  type="text"
                  class="form-control rounded-pill"
                  id="exampleFormControlInput1"
                  placeholder="FirstName"
                ></input>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <input
                  type="text"
                  class="form-control rounded-pill"
                  id="exampleFormControlInput1"
                  placeholder="City"
                ></input>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <input
                  type="email"
                  class="form-control rounded-pill"
                  id="exampleFormControlInput1"
                  placeholder="LastName"
                ></input>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <input
                  type="email"
                  class="form-control rounded-pill"
                  id="exampleFormControlInput1"
                  placeholder="Postal Code / ZIP"
                ></input>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <input
                  type="text"
                  class="form-control rounded-pill"
                  id="exampleFormControlInput1"
                  placeholder="Phone Number"
                ></input>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <select
                  class="form-select rounded-pill"
                  aria-label="Default select example"
                >
                  <option selected value="">
                    Poland
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ShippingInformation;
