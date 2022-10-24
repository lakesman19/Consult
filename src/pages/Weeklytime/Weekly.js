import React from "react";
import "./Weekly.css";
import Backgroundweekly from "../Weeklytime/Rectangleweekly.svg";
import Checkedicon from "../Weeklytime/aa-checked.svg";
import Arrow from "../Weeklytime/aa-arrow.svg";
import Inverted from "../Weeklytime/aa-inverted.svg";

const Weekly = () => {
  return (
    <div className="all-weekly">
      <div className="aa_nav-container">
        <div className="aa_logo-cont">
          <div className="logo-image"></div>
        </div>
      </div>

      <section className="aa_body-login">
        <div className="aa_login-content">
          <div className="aa_weekly-left"></div>
          <div className="aa_weekly-right">
            <div className="aa_right-content">
              <h1>Set weekly avalability</h1>
              <div className="aa_weekly-box">
                <div className="aa_box-content">
                  <div className="aa_box-left">
                    <input type="checkbox" name="" id="" />
                    <button className="aa_week-days">sun</button>
                  </div>

                  <div className="aa_box-right">
                    <input type="time" name="" id="" />
                    <i class="fa-regular fa-dash"></i>
                    <input type="time" name="" id="" />
                  </div>
                </div>

                <div className="aa_box-content">
                  <div className="aa_box-left">
                    <input type="checkbox" name="" id="" />
                    <button className="aa_week-days"> mon</button>
                  </div>

                  <div className="aa_box-right">
                    <input type="time" name="" id="" />
                    <input type="time" name="" id="" />
                  </div>
                </div>

                <div className="aa_box-content">
                  <div className="aa_box-left">
                    <input type="checkbox" name="" id="" />
                    <button className="aa_week-days">tue</button>
                  </div>

                  <div className="aa_box-right">
                    <input type="time" name="" id="" required/>
                    <input type="time" name="" id="" />
                  </div>
                </div>

                <div className="aa_box-content">
                  <div className="aa_box-left">
                    <input type="checkbox" name="" id="" />
                    <button className="aa_week-days">wed</button>
                  </div>

                  <div className="aa_box-right">
                    <input type="time" name="" id="" />
                    <input type="time" name="" id="" />
                  </div>
                </div>

                <div className="aa_box-content">
                  <div className="aa_box-left">
                    <input type="checkbox" name="" id="" />
                    <button className="aa_week-days">thur</button>
                  </div>

                  <div className="aa_box-right">
                    <input type="time" name="" id="" />
                    <input type="time" name="" id="" />
                  </div>
                </div>

                <div className="aa_box-content">
                  <div className="aa_box-left">
                    <input type="checkbox" name="" id="" />
                    <button className="aa_week-days">fri</button>
                  </div>

                  <div className="aa_box-right">
                    <input type="time" name="" id="" />
                    <input type="time" name="" id="" />
                  </div>
                </div>

                <div className="aa_box-content">
                  <div className="aa_box-left">
                    <input type="checkbox" name="" id="" />
                    <button className="aa_week-days">sat</button>
                  </div>

                  <div className="aa_box-right">
                    <input type="time" name="" id="" />
                    <input type="time" name="" id="" />
                  </div>
                </div>
              </div>
              <button className="aa-arrow">
                Next <img src={Arrow} alt="" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Weekly;
