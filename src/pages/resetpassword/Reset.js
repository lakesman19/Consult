import React from 'react'
import '../resetpassword/Reset.css'
import Background from '../resetpassword/Rectanglereset.svg'
import Logoconsult from '../signup/Consultlogo.svg'
import Googleimage from '../signup/flat-color-icons_google.svg'

const Reset = () => {
  return (
    <>
    <div className="all-reset">
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
                  <h2>Reset Password</h2>
                  <h6>Send a link to your email to reset your password</h6>
                  <form action="#" className='aa_login-form'>
                    <input type="password" name="" id=""placeholder='New Password'/>
                    <input type="password" name="" id=""placeholder='Confirm new Password'/>
                     <button className='aa-button'>Save New Password</button>
                     <a className='aa-anchor' href="#">Back to login</a>
                  </form>
            </div>
            </div>
            
         </section>
    </div>
    </>
  )
}

export default Reset