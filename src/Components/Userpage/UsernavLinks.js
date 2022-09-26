import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineCalendar } from 'react-icons/ai'
 import { TbReport } from "react-icons/tb";
 import { FaRegUser } from 'react-icons/fa'
 import { MdNotificationsActive, MdOutlineSettings } from 'react-icons/md'


const MenuItems = [
      { path:'/Wrapper/Calendar',
        name:'calender',
        icon:<AiOutlineCalendar/>
      },
      {  path:'/Wrapper/Reports',
        name:'Reports',
        icon:<TbReport/>
      },
      {  path:'/Wrapper/Customers',
        name:'Customers',
        icon:<FaRegUser/>
      },
      {  path:'/Wrapper/Notifications',
        name:'notifications',
        icon:<MdNotificationsActive/>
      },
      {  path:'/Wrapper/Settings',
        name:'settings',
        icon:<MdOutlineSettings/>
      },
      
  ]
const UsernavLinks = ({ inactive }) => {
  return (
    <>
      {MenuItems.map((MenuItem) => (
        <NavLink
          to={MenuItem.path}
          key={MenuItem.name}
          tag={Link}
          className='dashlink'
          activeclassName='active'
          style={{
            justifyContent: inactive ? 'left' : 'center',
          }}
        >
          <div
            className='icon'
          >
            {MenuItem.icon}
          </div>
          <div
            style={{ display: inactive ? 'block' : 'none' }}
            className='texticon'
          >
            {MenuItem.name}
          </div>
        </NavLink>
      ))}
    </>
  )
}

export default UsernavLinks