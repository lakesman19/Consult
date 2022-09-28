import React from 'react'
import "../signup/Signup.css"
import Background from '../signup/Rectanglesignup.svg'
import Logoconsult from '../signup/Consultlogo.svg'
import Googleimage from '../signup/flat-color-icons_google.svg'


const Signup = () => {
  return (
    <>
    <div className="all">
         <div className="aa_nav-container">
            <div className="aa_logo-cont">
                <div className="logo-image">
                   <img src={Logoconsult} alt="" /> 
                </div>
            </div>
         </div>

         <section className="aa_body-part">
            <div className="aa_body-cont">
               <div className="aa_body-left">
                     <h2>Schedule the perfect <br /> time with your clients. </h2>  
               </div>
               <div className="aa_body-right">
                  <h1>Register here</h1>
                  <form action="#" className='aa_login-form'>
                     <input type="text" name="" id="" placeholder='Full Name' />
                     <input type="email" name="" id="" placeholder='Email'/>
                     <input type="password" name="" id="" placeholder='Password'/>
                     <input type="password" name="" id="" placeholder='Confirm Password'/>
                     <button className='aa-button'>Create an account</button>
                     <button className='aa-button2'><img src={Googleimage} alt="" /> Sign up with Google</button>
                  </form>
                  <p>Already have an account? <a href="http://" target="_blank" rel="noopener noreferrer"> Log in</a></p>
            </div>
            </div>
            
         </section>
    </div>
    </>
  )
}

export default Signup