import React from 'react';
import FullCalendar from '../../node_modules/@fullcalendar/react/dist/main';
import dayGridPlugin from '@fullcalendar/daygrid';
import HeaderContainer from '../containers/HeaderContainer';
import Header from '../components/common/Header';

const CalendarPage = () => {
  return (
    <div>
      <Header />
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
    </div>
  );
};

export default CalendarPage;
