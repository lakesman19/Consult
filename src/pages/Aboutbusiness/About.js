import React from "react";
import "./About.css";
import Backgroudabout from "../Aboutbusiness/Rectangleabout.svg";
// import Logoconsult from "../Login/Consultlogo.svg";
import Arrow from "../Weeklytime/aa-arrow.svg";
import Inverted from "../Weeklytime/aa-inverted.svg";

const About = () => {
  return (
    <>
      <div className="all-about">
        <div className="aa_nav-container">
          <div className="aa_logo-cont">
            <div className="logo-image">
              {/* <img src={Logoconsult} alt="" /> */}
            </div>
          </div>
        </div>

        <section className="aa_body-part">
          <div className="aa_body-cont">
            <div className="aa_body-left"></div>
            <div className="aa_weekly-right">
              <div className="aa_right-cont">
                <h1>About your business</h1>
                <p>
                  Give us some details about your company to begin with, and
                  we'd be delighted to assist you.
                </p>
                <form action="#" className="aa_about-form">
                  <div className="aa-label">
                    <label htmlFor="">Business Name</label>
                    <input type="text" name="" id="" />
                    <img src={Inverted} alt="" />
                  </div>
                  <div className="aa-label">
                    <label htmlFor="">Time Zone</label>
                    <input type="text" name="" id="" />
                    <img src={Inverted} alt="" />
                  </div>
                  <div className="aa-label">
                    <label htmlFor="">Currency</label>
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

export default About;
