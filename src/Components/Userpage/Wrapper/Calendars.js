import React from 'react'
import Wrapper from '../Wrapper'
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Year,
  TimelineViews,
  TimelineMonth,
  TimelineYear,
  ViewsDirective,
  ViewDirective,
  ResourcesDirective,
  ResourceDirective,
  Inject,
  Resize,
  DragAndDrop,
  Agenda,
  Print,
  ExcelExport,
  ICalendarImport,
  ICalendarExport,
  Timezone,
} from '@syncfusion/ej2-react-schedule'

const Calendars = () => {

  return (
    <Wrapper>
      <>
        <select
          class='form-select form-select-sm select'
          aria-label='.form-select-sm example'
          style={{ width: '120px' }}
        >
          <option selected>Calendar</option>
          <option value='1'>List view</option>
        </select>
        <ScheduleComponent currentView='Month' className='w-100 my-3'>
          <div className='appoinments d-flex justify-content-center align-items-center my-2'>
            <div className='total-appointment'>
              <p>5</p>
              <p>total appointment</p>
            </div>
            <div className='total-appointment'>
              <p>#250,000</p>
              <p>Estimated Revenue</p>
            </div>
          </div>
          <Inject
            services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop]}
          />
        </ScheduleComponent>
      </>
    </Wrapper>
  )
}

export default Calendars