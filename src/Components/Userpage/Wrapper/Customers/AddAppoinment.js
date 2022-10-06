import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { AiOutlineCalendar } from 'react-icons/ai'

const AddCustomer = ({ setOpenn }) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => {
    setShow(true)
    setOpenn(false)
  }
  return (
    <>
      <div
        className='w-100 my-3 gap-3 appoinment-popover d-flex justify-content- align-items-center'
        onClick={handleShow}
        style={{ cursor: 'pointer' }}
      >
        <div className='appoinment-popover-icon'>
          <AiOutlineCalendar />
        </div>
        <div className='appoinment- popover-label'>Add Appointment</div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='modalhead'>
          <Modal.Title className='d-flex gap-3'>
            <div className='Addappointiconmodal'></div>
            New Appoinment
          </Modal.Title>
          <div className='cancel' onClick={handleClose}></div>
        </Modal.Header>
        <Modal.Body className='modalbody d-flex justify-content-center align-items-center flex-column w-100'>
          <form action=''>
            <div className='customermodal w-100 d-flex justify-content-between mt-4'>
              <label htmlFor='customer name'>Workspace</label>
              <input type='text' />
            </div>
            <div className='customermodal w-100 d-flex justify-content-between mt-4'>
              <label htmlFor='services'>Services</label>
              <input type='text' />
            </div>
            <div className='customermodal w-100 d-flex justify-content-between  mt-4'>
              <label htmlFor='staff'>Assign staff</label>
              <select
                class='form-select form-select-sm appoinmentselect'
                aria-label='.form-select-sm example'
              >
                <option selected>Calendar</option>
                <option value='1'>List view</option>
              </select>
            </div>
            <div className='customermodal w-100 d-flex justify-content-between mt-4'>
              <label htmlFor='staff'>Customer</label>
              <select
                class='form-select form-select-sm appoinmentselect'
                aria-label='.form-select-sm example'
              >
                <option selected>Calendar</option>
                <option value='1'>List view</option>
              </select>
            </div>
            <div className='customermodals w-100 d-flex justify-content-between mt-4'>
              <label htmlFor='number'>Notes</label>
              <div className='textarea'>
                <textarea name='' id='' cols='30' rows='3'></textarea>
                <div className='checkbox d-flex align-items-center gap-2'>
                  <input type='checkbox' name='' id='' />
                  <p classname=''>Send notifications for customer</p>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer className='modalfooter'>
          <div className='footerbtnappoinment'>
            <div className='closebtn' onClick={handleClose}>
              Close
            </div>
            <div className='save'>Save</div>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddCustomer
