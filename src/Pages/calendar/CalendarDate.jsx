import React, { memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import TodayKcalRecord from './../../components/calendar/TodayKcalRecord';

import { CalendarDateContainer } from '../../styled/CalendarDateStyles';

import MyInfoRight from '../../components/calendar/MyInfoRight';
import MyInfoLeft from '../../components/calendar/MyInfoLeft';
import useEditState from '../../state/edit-state';

import menu from '../../assets/menu_calendarMeal.json'

const CalendarDate = memo(() => {
  const { year, month, day } = useParams();

  const { initToday, settingData } = useEditState(state => state);

  useEffect(() => {
    const today = `${year}/${month}/${day}`
    initToday(today)
    settingData()
  }, []);

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
      <ul className='today_kcal_record'>
        {
          menu.map(item => {
            const { id, name, image, unit, text } = item;
            return (
              <TodayKcalRecord
                key={id}
                id={id}
                name={name}
                image={image}
                unit={unit}
                text={text}
              />
            )
          })
        }
      </ul>
    </CalendarDateContainer>
  );
});

export default CalendarDate;