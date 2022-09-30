import React from 'react'
import '../forgotpassword/Forgotpassword.css'
import Background from '../forgotpassword/Rectangleforgot.svg'
import Logoconsult from '../signup/Consultlogo.svg'
import Googleimage from '../signup/flat-color-icons_google.svg'


const Forgotpassword = () => {
  return (
    <>
    <div className="all-forgot">
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
               </div>
               <div className="aa_body-right">
                  <h2>Forgot Password</h2>
                  <h6>Send a link to your email to reset your password</h6>
                  <form action="#" className='aa_login-form'>
                     <input type="email" name="" id="" placeholder='Email'/>
                     <button className='aa-button'>Send reset link</button>
                     <a className='aa-anchor' href="#">Back to login</a>
                  </form>
            </div>
            </div>
            
         </section>
    </div>
    </>
  )
}

export default Forgotpassword