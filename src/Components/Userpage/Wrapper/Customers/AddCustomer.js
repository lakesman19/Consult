import React, { useState } from 'react'
import { FaUserAlt } from 'react-icons/fa'
import Modal from 'react-bootstrap/Modal'

const AddCustomer = ({setOpenn,props}) => {
   const [show, setShow] = useState(false)

   const handleClose = () => setShow(false)
   const handleShow = () => {
    setShow(true)
     setOpenn(false)

  }
  return (
    <div className='cust'>
      <div
        className='customer-popover my-3 gap-3 w-100 d-flex justify-content- align-items-center'
        style={{ cursor: 'pointer' }}
        onClick={handleShow}
      >
        <div className='customer-popover-icon'>
          <FaUserAlt />
        </div>
        <div className='appoinment- popover-label'>Add customer</div>
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
            <div className='Addiconmodal'></div>
            Add Customer
          </Modal.Title>
          <div className='cancel' onClick={handleClose}></div>
        </Modal.Header>
        <Modal.Body className='modalbody d-flex justify-content-center align-items-center flex-column w-100'>
          <form action=''>
            <div className='customermodal w-100 d-flex justify-content-between  mt-4'>
              <label htmlFor='customer name'>Customer’s Name*</label>
              <input type='text' />
            </div>
            <div className='customermodal w-100 d-flex justify-content-between mt-4'>
              <label htmlFor='email'>Email address</label>
              <input type='email' />
            </div>
            <div className='customermodal w-100 d-flex justify-content-between mt-4'>
              <label htmlFor='number'>Phone Number</label>
              <input type='tel' />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer className='modalfooter'>
          <div className='footerbtn'>
            <div className='closebtn' onClick={handleClose}>
              Close
            </div>
            <div className='save'>Save</div>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddCustomer