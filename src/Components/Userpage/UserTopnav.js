import React from 'react'
import { Select } from 'antd'

const { Option } = Select

const UserTopnav = ({ inactive, setSmallScreenToggle, smallScreenToggle }) => {
  return (
    <>
      <div className='topnav'
     style={{ marginLeft: inactive ? '250px' : '80px' }} >
        <Select
          defaultValue='calendar'
          style={{
            width: 120,
          }}
        >
          <Option value='calendar'>calendar</Option>
          <Option value='list view'>list view</Option>
        </Select>
      </div>
    </>
  )
}

export default UserTopnav