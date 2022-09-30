import React from 'react'
import UsersideNav from './UsersideNav'
import UserTopnav from './UserTopnav'
import { useState } from 'react'



import '../Userpage/Wrapper.css'
const Wrapper = ({children}) => {

     const [inactive, setInactive] = useState(false)
     const toggle = () => {
       console.log('clicked')
       setInactive(!inactive)
     }
     const [smallScreenToggle, setSmallScreenToggle] = useState(false)
  return (
    <>
      <div className='d-flex w-100'>
        <UsersideNav
          toggle={toggle}
          inactive={inactive}
          setInactive={setInactive}
        />
        <div className='w-100'>
          <UserTopnav
            inactive={inactive}
            setInactive={setInactive}
            smallScreenToggle={smallScreenToggle}
            setSmallScreenToggle={setSmallScreenToggle}
          />
          <div
            className='wrappers'
            style={{ marginLeft: inactive ? '250px' : '80px' }}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default Wrapper