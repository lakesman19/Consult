import React from 'react'
import Wrapper from '../Wrapper'
import graphimg from '../UserImage folder/undraw_calendar_re_ki49 1.png'

const Reports = () => {
  return (
    <Wrapper>
      <>
        <div className='reports d-flex justify-content-center align-items-center'>
          <div className='graphs'>
         <img src={graphimg} alt="" />
          </div>
          <div className='charts-options'>
            <div className='report-type'>
              <h3>reports type</h3>
              <select
                class='form-select form-select-sm r-type'
                aria-label='.form-select-sm example'
                style={{ width: '250px' }}
              >
                <option selected>Select Report Type</option>
                <option value='1'>booking</option>
                <option value='2'>Revenue</option>
              </select>
              <select
                class='form-select form-select-sm'
                aria-label='.form-select-sm example'
                style={{ width: '250px' }}
              >
                <option selected>Select Report Based on</option>
                <option value='1'>Appointment Type</option>
                <option value='2'>Appointment Status</option>
                <option value='2'>Staff</option>
                <option value='2'>Service</option>
              </select>
            </div>
            <div className='workspace'>
              <h3>Work space</h3>
              <select
                class='form-select form-select-sm'
                aria-label='.form-select-sm example'
                style={{ width: '250px' }}
              >
                <option selected>select your work space</option>
                <option value='1'>Sheda house</option>
                <option value='1'>fireswitch technologies</option>
              </select>
            </div>
            <div className='date-range'>
              <h3>Date range</h3>
              <select
                class='form-select form-select-sm'
                aria-label='.form-select-sm example'
                style={{ width: '250px' }}
              >
                <option selected> select date range</option>
                <option value='1'>yearly</option>
                <option value='1'>montly</option>
              </select>
            </div>
            <div className='chartbtn  d-flex justify-content-between align-items center'>
              <button className='applybtn'>apply</button>
              <button className='resetbtn'>Reset</button>
            </div>
          </div>
        </div>
      </>
    </Wrapper>
  )
}

export default Reports