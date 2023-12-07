import React, { memo } from 'react';
import { useParams } from 'react-router-dom';

import TodayKcalRecord from './../../components/calendar/TodayKcalRecord';

import { CalendarDateContainer } from '../../styled/CalendarDateStyles';

import MyInfoRight from '../../components/calendar/MyInfoRight';
import MyInfoLeft from '../../components/calendar/MyInfoLeft';

const CalendarDate = memo(() => {
  const { year, month, day } = useParams();
  return (
    <CalendarDateContainer>
      <div className='date_container'>
        <span>{year}</span>
        <span style={{ marginRight: "10px" }}>년</span>
        <span>{month}</span>
        <span style={{ marginRight: "10px" }}>월</span>
        <span>{day}</span>
        <span>일</span>
      </div>
      <div className='my_info_container'>
        <MyInfoLeft />
        <MyInfoRight />
      </div>
      <TodayKcalRecord />
    </CalendarDateContainer>
  );
});

export default CalendarDate;