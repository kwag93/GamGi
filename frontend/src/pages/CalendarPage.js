import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const CalendarPage = () =>{
	
	return (
	  <>
     <HeaderContainer />		
	 <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
      />
	  </>
	);
};
  
export default CalendarPage;
