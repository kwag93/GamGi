import React from 'react';
import FullCalendar from '../../node_modules/@fullcalendar/react/dist/main';
import dayGridPlugin from '@fullcalendar/daygrid';
import HeaderContainer from '../containers/HeaderContainer';

const CalendarPage = () => {
  return (
    <div>
      <HeaderContainer />
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
    </div>
  );
};

export default CalendarPage;
