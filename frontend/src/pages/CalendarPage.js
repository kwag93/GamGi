import React from 'react';
import Header from '../components/common/Header';
import FullCalendar from '../../node_modules/@fullcalendar/react/dist/main';
import dayGridPlugin from '@fullcalendar/daygrid';

const CalendarPage = () => {
  return (
    <div>
      <Header />
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
    </div>
  );
};

export default CalendarPage;
