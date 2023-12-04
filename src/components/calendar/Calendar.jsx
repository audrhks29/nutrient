import React, { memo, useEffect, useState } from 'react';

import { CalendarContainer } from '../../styled/CalendarStyles';

const Calendar = memo(() => {
  const [boxArray, setBoxArray] = useState(Array.from(Array(42), (_, index) => ({ id: index + 1 })))
  const selectedYear = 2023;
  const selectedMonth = 12;
  const day = new Date(selectedYear, selectedMonth - 1, 1); // 시작일을 1일로 변경
  const lastDate = new Date(selectedYear, selectedMonth, 0).getDate(); // 월의 마지막 날짜 계산
  const dayOfWeek = day.getDay(); // 시작일의 요일

  useEffect(() => {
    const updatedBoxArray = [...boxArray];
    for (let i = dayOfWeek, date = 1; date <= lastDate; i++, date++) {
      updatedBoxArray[i].date = date;
    }
    setBoxArray(updatedBoxArray);
  }, [selectedYear, selectedMonth]);

  return (
    <CalendarContainer>
      <div className='selected_year_month'>
        <span className='text_bold'>{selectedYear}</span>
        <span style={{ marginRight: "10px" }}>년</span>
        <span className='text_bold'>{selectedMonth}</span>
        <span>월</span>
      </div>
      <ul className='date_container'>
        {
          boxArray.map((item, index) => {
            return (
              <li
                className='date_box'
                key={index}
                style={{ color: item.id % 7 === 1 ? "red" : "black" }}
              >
                {item.date}
              </li>
            )
          })
        }
      </ul>
    </CalendarContainer>
  );
});

export default Calendar;