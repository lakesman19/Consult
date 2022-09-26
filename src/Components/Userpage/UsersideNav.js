import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from '../../Components/Userpage/UserImage folder/Consult.png'
import UsernavLinks from './UsernavLinks'

import '../Userpage/Wrapper.css'
const UsersideNav = ({ toggle, inactive }) => {
  return (
    <>
      <div className='sidenav'>
        <div className='topsection d-flex align-items-center '>
          <div className='bars'>
            <FaBars />
          </div>
          <Link to='' className='logo'>
            <img src={logo} alt='' />
          </Link>
        </div>
        <div className='div'>
          <UsernavLinks />
        </div>
      </div>
      <div
        className='mediumscreen'
        style={{ width: inactive ? '250px' : '80px' }}
      >
        <div className='topsection d-flex align-items-center '>
          <div className='bars'>
            <FaBars onClick={toggle} />
          </div>
          <div
            className='logo'
            style={{ display: inactive ? 'block' : 'none' }}
          >
            <img src={logo} alt='' />
          </div>
        </div>
        <div className='div'>
          <UsernavLinks inactive={inactive} />
        </div>
      </div>
    </>
  )
}

export default UsersideNav