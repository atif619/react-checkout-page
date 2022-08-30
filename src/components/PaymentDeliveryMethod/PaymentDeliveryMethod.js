import React from "react";
import dhlLogo from "../../assets/dhl.png";
import paypalLogo from "../../assets/paypal.png";
import VisaLogo from "../../assets/visa.png";
import mastercardLogo from "../../assets/mastercard.png";
import maestroLogo from "../../assets/maestro.png";
import discoveLogo from "../../assets/discover.png";
import idealLogo from "../../assets/ideal.png";
import inpostLogo from "../../assets/inpost.png";
import dpdlogo from "../../assets/dpd.png";
import fedexLogo from "../../assets/fedex.png";

const PaymentDeliveryMethod = () => {
  return (
    <>
      <div className="container ">
        <div className="mb-4">
          <h5>Payment Methods</h5>
        </div>
        <div className="row g-3">
          <div className="col-lg-4 col-md-4 col-6 text-center">
            <div className="border rounded-pill">
              <img className="dhl-logo" src={paypalLogo} alt="paypalLogo" />
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-6 text-center">
            <div className="border rounded-pill">
              <img className="dhl-logo" src={VisaLogo} alt="VisaLogo" />
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-6 text-center">
            <div className="border rounded-pill">
              <img
                className="dhl-logo"
                src={mastercardLogo}
                alt="mastercardLogo"
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-6 text-center">
            <div className="border rounded-pill">
              <img className="dhl-logo" src={maestroLogo} alt="maestroLogo" />
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-6 text-center">
            <div className="border rounded-pill">
              <img className="dhl-logo" src={discoveLogo} alt="discoveLogo" />
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-6 text-center">
            <div className="border rounded-pill">
              <img className="dhl-logo" src={idealLogo} alt="idealLogo" />
            </div>
          </div>
        </div>

        <div className="row g-3 mt-5">
          <div className="mb-4">
            <h5>Delivery Methods</h5>
          </div>
          <div className="col-lg-6 col-md-6 col-6 ">
            <div className="border rounded-pill d-flex align-items-center justify-content-center">
              <img className="dhl-logo" src={inpostLogo} alt="inpostLogo" />
              <span>$20</span>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-6 text-center">
            <div className="border rounded-pill d-flex align-items-center justify-content-center">
              <img className="dhl-logo" src={dpdlogo} alt="dpdlogo" />
              <span>$20</span>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-6 text-center">
            <div className="border rounded-pill d-flex align-items-center justify-content-center">
              <img className="dhl-logo" src={dhlLogo} alt="dhlLogo" />
              <span>$20</span>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-6 text-center">
            <div className="border rounded-pill d-flex align-items-center justify-content-center">
              <img className="dhl-logo" src={fedexLogo} alt="fedexLogo" />
              <span>$20</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentDeliveryMethod;
