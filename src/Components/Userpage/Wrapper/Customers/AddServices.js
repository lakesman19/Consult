import React,{useState} from 'react'
import { MdHomeRepairService } from 'react-icons/md'
import  Modal  from 'react-bootstrap/Modal'



const AddServices = ({ setOpenn, props }) => {
   const [show, setShow] = useState(false)

   const handleClose = () => setShow(false)
   const handleShow = () => {
    setShow(true)
     setOpenn(false)
   }
  return (
    <div>
      <div
        className='services-popover my-3 gap-3 w-100 d-flex justify-content- align-items-center'
        onClick={handleShow}
        style={{ cursor: 'pointer' }}
      >
        <div className='services-popover-icon'>
          <MdHomeRepairService />
        </div>
        <div className='appoinment popover-label'>add services</div>
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
            <div className='Addserviceiconmodal'></div>
            Add New Service
          </Modal.Title>
          <div className='cancel' onClick={handleClose}></div>
        </Modal.Header>
        <Modal.Body className='modalbody d-flex justify-content-center align-items-center flex-column w-100'>
          <form action=''>
            <div className='customermodal w-100 d-flex justify-content-between mt-4'>
              <label htmlFor='customer name'>Workspace</label>
              <input type='text' />
            </div>
            <div className='customermodal w-100 d-flex justify-content-between  mt-4'>
              <label htmlFor='staff'>Services</label>
              <select
                class='form-select form-select-sm appoinmentselect'
                aria-label='.form-select-sm example'
              >
                <option selected>Select Service</option>
                <option value='1'>List view</option>
              </select>
            </div>
            <div className='customermodal w-100 d-flex justify-content-between align-items-center mt-4'>
              <label htmlFor='number'>Duration</label>
              <div className='durationservice'>
                <input type='time' />
                <input type='time' />
              </div>
            </div>
            <div className='customermodal w-100 d-flex justify-content-between mt-4'>
              <label htmlFor='services'>Price</label>
              input
            </div>
            <div className='customermodal w-100 d-flex justify-content-between align-items-center mt-4'>
              <label htmlFor='number'>Buffer Time</label>
              <div className='durationservice'>
                <input type='time' />
                <input type='time' />
              </div>
            </div>
            <div className='customermodal w-100 d-flex justify-content-between  mt-4'>
              <label htmlFor='staff'>Staff Assigned</label>
              <select
                class='form-select form-select-sm appoinmentselect'
                aria-label='.form-select-sm example'
              >
                <option selected>Calendar</option>
                <option value='1'>List view</option>
              </select>
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

export default AddServices