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
        <select
          class='form-select form-select-sm select'
          aria-label='.form-select-sm example'
          style={{width:'120px'}}
        >
          <option selected>Calendar</option>
          <option value='1'>List view</option>
        </select>
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