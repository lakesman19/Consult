import React,{useState} from 'react'
import Wrapper from '../Wrapper'
import { FiSearch } from 'react-icons/fi'
import { MdAdd } from 'react-icons/md'
import { Popover } from 'antd'
import AddCustomer from './Customers/AddCustomer'
import AddAppoinment from './Customers/AddAppoinment'
import AddServices from './Customers/AddServices'
import UnavilableHours from './Customers/UnavilableHours'
import ExtraHours from './Customers/ExtraHours'


const Customers = () => {
   const [open, setOpenn] = useState(false)

  //  const hide = () => {
  //    setOpenn(false)
  //  }
    const handleOpenChange = (yes) => {
      setOpenn(yes)
    }

   const content = (
     <div className='content-popover-add'>
       <AddAppoinment setOpenn={setOpenn} />
       <AddCustomer setOpenn={setOpenn} />
       <AddServices setOpenn={setOpenn} />
       <UnavilableHours setOpenn={setOpenn} />
       <ExtraHours setOpenn={setOpenn} />
     </div>
   )
  return (
    <Wrapper>
      <div className='customer d-flex justify-content-center align-items-center w-100'>
        <table className='table'>
          <thead>
            <tr classname=''>
              <th>Name</th>
              <th>Email address</th>
              <th>phone</th>
              <th>Revenu</th>
              <th>
                <FiSearch style={{ fontSize: '2.5rem' }} />
              </th>
              <th>
                <Popover
                  content={content}
                  trigger='click'
                  open={open}
                  onOpenChange={handleOpenChange}
                >
                  <MdAdd style={{ fontSize: '2.5rem', cursor: 'pointer' }} />
                </Popover>
              </th>
            </tr>
          </thead>
          <div className='d-flex sort-section my-4'>
            <label htmlFor=''>sort by</label>
            <select
              class='form-select form-select-sm customers-select '
              aria-label='.form-select-sm example'
              style={{ width: '150px' }}
            >
              <option selected>Name</option>
              <option value='1'>Last Modified</option>
              <option value='1'>Last Added</option>
              <option value='1'>Recently Scheduled</option>
              <option value='1'>No of Visits</option>
              <option value='1'>Last Visited</option>
              <option value='1'>Revenue</option>
            </select>
          </div>
          <tbody>
            <tr>
              <td>Michael adegbite</td>
              <td>michaeldidymus@yahoo.com</td>
              <td>+2348666766667</td>
              <td>$3000</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Michael adegbite</td>
              <td>michaeldidymus@yahoo.com</td>
              <td>+2348666766667</td>
              <td>$3000</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Michael adegbite</td>
              <td>michaeldidymus@yahoo.com</td>
              <td>+2348666766667</td>
              <td>$3000</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Michael adegbite</td>
              <td>michaeldidymus@yahoo.com</td>
              <td>+2348666766667</td>
              <td>$3000</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </Wrapper>
  )
}

export default Customers
