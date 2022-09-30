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
        <ScheduleComponent currentView='Month' className='w-100'>
          <Inject
          services={[Day, Week, WorkWeek, Month, Agenda]}/>
        </ScheduleComponent>
      </>
    </Wrapper>
  )
}

export default Calendars