import React from 'react'
import '../signin/Signin.css'
import Background from '../signin/Rectanglesignin.svg'
import Logoconsult from '../signup/Consultlogo.svg'
import Googleimage from '../signup/flat-color-icons_google.svg'


const Signin = () => {
  return (
    <>
    <div className="all-signin">
    <div className="aa_nav-container">
            <div className="aa_logo-cont">
                <div className="logo-image">
                   <img src={Logoconsult} alt="" /> 
                </div>
            </div>
         </div>

         <section className="aa_body-part">
            <div className="aa_body-cont">
               <div className="aa_body-left"></div>
               <div className="aa_body-right">
                  <h1>welcome</h1>
                  <p>How would you like us to identify you?</p>
                  <form action="#" className='aa_login-form'>
                     <button className='aa_signin-button'>As a Business/ Professional</button>
                     <button className='aa_signin-button'>As a Customer/Client</button>
                  </form>
            </div>
            </div>
         </section>
    </div>
    </>
  )
}

export default Signin