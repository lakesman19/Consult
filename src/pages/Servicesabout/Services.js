import React from "react";
import "./Services.css";
import Backgroundservices from "../Servicesabout/Rectangleservices.svg";
import Logoconsult from "../Login/Consultlogo.svg";
import Arrow from "../Weeklytime/aa-arrow.svg";
import Inverted from "../Weeklytime/aa-inverted.svg";

const Services = () => {
  return (
    <>
      <div className="all-services">
        <div className="aa_nav-container">
          <div className="aa_logo-cont">
            <div className="logo-image"></div>
          </div>
        </div>

        <section className="aa_body-part">
          <div className="aa_body-cont">
            <div className="aa_body-left"></div>
            <div className="aa_weekly-right">
              <div className="aa_right-cont">
                <h1>About your services</h1>
                <p>
                  A service is one kind of commercial product you might provide
                  to a customer. To begin receiving appointments, establish a
                  one-on-one service.
                </p>
                <form action="#" className="aa_about-form">
                  <div className="aa-label">
                    <label htmlFor="">Services Category</label>
                    <input type="text" name="" id="" />
                    <img src={Inverted} alt="" />
                  </div>
                  <div className="aa-label">
                    <label htmlFor="">Duration [min]</label>
                    <input type="text" name="" id="" />
                    <img src={Inverted} alt="" />
                  </div>
                  <div className="aa-label">
                    <label htmlFor="">Price NGN</label>
                    <input type="text" name="" id="" />
                    <img src={Inverted} alt="" />
                  </div>
                </form>
                <button className="aa-arrow">
                  Next <img src={Arrow} alt="" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
