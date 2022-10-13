import React from 'react'
// import { Select } from 'antd'
import { BiAlarm } from 'react-icons/bi'
import { AiOutlineShareAlt } from 'react-icons/ai'
import profileimg from '../Userpage/UserImage folder/honda accord.jpg'


const UserTopnav = ({ inactive, setSmallScreenToggle, smallScreenToggle }) => {
  return (
    <>
      <div
        className='topnav'
        style={{ paddingLeft: inactive ? '250px' : '80px' }}
      >
        <div className='bookingandprofi d-flex justify-content-center align-items-center'>
          <div className='booking'>
            <BiAlarm />
            <p>booking page</p>
          </div>
          <div className='share'>
            <AiOutlineShareAlt />
            <p>share</p>
          </div>
          <div className="profileimg">
            <img src={profileimg} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default UserTopnav