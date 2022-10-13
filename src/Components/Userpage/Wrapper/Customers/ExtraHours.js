import React, { useState } from 'react'
import { MdHomeRepairService } from 'react-icons/md'
import { Modal } from 'antd'

const ExtraHours = ({ setOpenn }) => {
  const [open, setOpen] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)

  const showModal = () => {
    setOpen(true)
    setOpenn(false)
  }

  const handleCancel = () => {
    console.log('Clicked cancel button')
    setOpen(false)
  }
  const handleOk = () => {
    setConfirmLoading(true)
    setTimeout(() => {
      setOpen(false)
      setConfirmLoading(false)
    }, 2000)
  }
  return (
    <>
      <div
        className='services-popover my-3 gap-3 w-100 d-flex justify-content- align-items-center'
        onClick={showModal}
        style={{ cursor: 'pointer' }}
      >
        <div className='services-popover-icon'>
          <MdHomeRepairService />
        </div>
        <div className='appoinment- popover-label'>
          add extra available hours
        </div>
      </div>
      <Modal
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>Bla bla ...</p>
        <p>Bla bla ...</p>
        <p>Bla bla ...</p>
      </Modal>
    </>
  )
}

export default ExtraHours
