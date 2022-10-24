import React, { useState } from 'react'
import { MdHomeRepairService } from 'react-icons/md'
import Modal from 'react-bootstrap/Modal'

const UnavilableHours = ({ setOpenn,props }) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => {
    setShow(true)
    setOpenn(false)
  }
  return (
    <>
      <div
        className='services-popover my-3 gap-3 w-100 d-flex justify-content- align-items-center'
        onClick={handleShow}
        style={{ cursor: 'pointer' }}
      >
        <div className='services-popover-icon'>
          <MdHomeRepairService />
        </div>
        <div className='appoinment- popover-label'>add unavailable hours</div>
      </div>
      <Modal
        {...props}
        show={show}
        onHide={handleClose}
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header className='modalhead'>
          <Modal.Title className='d-flex gap-3'>
            <div className='Addunavailableiconmodal'></div>
            Add Unavailability - Business
          </Modal.Title>
          <div className='cancel' onClick={handleClose}></div>
        </Modal.Header>
        <Modal.Body className='modalbody d-flex justify-content-center align-items-center flex-column w-100'>
          <form action=''>
            <div className='customermodalspecial w-100 d-flex justify-content-between mt-4'>
              <label>Break Time For</label>
              <div className='checkunavailable'>
                <div className='businesscheck'>
                  <input type='checkbox' />
                  <label>Business</label>
                </div>
                <div className='staffcheck'>
                  <input type='checkbox' />
                  <label>Staff</label>
                </div>
              </div>
            </div>
            <div className='customermodal w-100 d-flex justify-content-between mt-4'>
              <label htmlFor='staff'>From</label>
              <div className='unavailableinput'>
                <input type='date' />
              </div>
            </div>
            <div className='customermodal w-100 d-flex justify-content-between mt-4'>
              <label>To</label>
              <div className='unavailableinput'>
                <input type='date' />
              </div>
            </div>
            <div className='customermodal w-100 d-flex justify-content-between mt-4'>
              <label>Reason</label>
              <input type='text' />
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

export default UnavilableHours
