import React from 'react'
import './Login.css'
import Backgroundlogin from '../Login/Rectanglelogin.svg'
import Logoconsult from "../Login/Consultlogo.svg";
import Googleimage from "../Signup/flat-color-icons_google.svg"

const Login = () => {
  return (
    <div className="aa-all">
      <div className="linear">
        <div className="aa_nav-container">
              <div className="aa_logo-cont">
                  <div className="logo-image">
                    <img src={Logoconsult} alt="" /> 
                  </div>
              </div>
          </div>

          
         <section className="aa_body-login">
          <div className="aa_login-content">
            <div className="aa_login-left">
              <h2>Schedule the perfect <br /> time with your clients.</h2>
            </div>
            <div className="aa_login-right">
            <h1>Welcome back!</h1>
                  <form action="#" className='aa_login-form'>
                     <input type="email" name="" id="" placeholder='Email'/>
                     <input type="password" name="" id="" placeholder='Password'/>
                     <a href="#"> Forgot Password?</a>
                     <button className='aa-button'>Login</button>
                     <button className='aa-button2'><img src={Googleimage} alt="" /> Sign up with Google</button>
                  </form>
                  <p>Don't have an account? <a href="http://" target="_blank" rel="noopener noreferrer"> Sign Up</a></p>
            
            </div>
          </div>
         </section>
      </div>
    </div>
  )
}

export default Login