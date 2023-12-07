import React, { memo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";

import useCalendarState from './../../state/calendar-state';

import { CalendarContainer } from '../../styled/CalendarStyles';

const Calendar = memo(() => {
  const navigate = useNavigate();
  const { date, dateArray } = useCalendarState(state => state)
  const { clickPrevArrow, clickNextArrow, initDate, calData } = useCalendarState(state => state)

  useEffect(() => {
    initDate()
  }, [])

  useEffect(() => {
    calData()
  }, [date]);

  const goToCalendarDate = (year, month, day) => {
    navigate(`/calendar/${year}/${month + 1}/${day}`)
  }

  return (
    <CalendarContainer>
      {
        date && <div className='year_month_container'>
          <div className='move_month_btn'>
            <i
              onClick={clickPrevArrow}
              style={{ marginRight: "200px" }}
            >
              <AiOutlineCaretLeft />
            </i>
            <i onClick={clickNextArrow}>
              <AiOutlineCaretRight />
            </i>
          </div>
          <span className='text_bold'>{date.getFullYear()}</span>
          <span style={{ marginRight: "10px" }}>년</span>
          <span className='text_bold'>{date.getMonth() + 1}</span>
          <span>월</span>
        </div>
      }
      <ul className='week_date_container'>
        <li className='week_box' style={{ color: "red" }}>일</li>
        <li className='week_box'>월</li>
        <li className='week_box'>화</li>
        <li className='week_box'>수</li>
        <li className='week_box'>목</li>
        <li className='week_box'>금</li>
        <li className='week_box'>토</li>
        {
          dateArray.map((item, index) => {
            const { year, month, day } = item;
            return (
              <li
                className='date_box'
                key={index}
                style={{ color: item.id % 7 === 1 ? "red" : "black" }}
                onClick={() => goToCalendarDate(year, month, day)}
              >
                {day}
              </li>
            )
          })
        }
      </ul>
    </CalendarContainer>
  );
});

export default Calendar;