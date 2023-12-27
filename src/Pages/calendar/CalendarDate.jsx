import React, { memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { CalendarDateContainer } from '../../styled/CalendarDateStyles';

import MyInfoRight from '../../components/calendar/MyInfoRight';
import MyInfoLeft from '../../components/calendar/MyInfoLeft';
import TodayKcalRecord from '../../components/calendar/todayKcalRecord/TodayKcalRecord';
import EditPopup from './../../components/calendar/EditPopup';
import Background from '../../components/Background';

import useEditState from '../../state/edit-state';

const CalendarDate = memo(() => {
  const { year, month, day } = useParams();
  const { data, initToday, settingData, popupState } = useEditState(state => state);

  useEffect(() => {
    const today = `${year}/${month}/${day}`
    initToday(today)
  }, []);

  useEffect(() => {
    settingData();
  }, [data]);


  return (
    <>
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
      {popupState && <EditPopup />}
      {popupState && <Background />}
    </>
  );
});

export default CalendarDate;