import React, { memo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import menu from '../../assets/menu_calendarMeal.json'

const TodayKcalRecord = memo(() => {
  const { year, month, day } = useParams();
  const navigate = useNavigate()

  const goToEdit = () => {
    navigate(`/calendar/${year}/${month}/${day}/edit`)
  }

  return (
    <ul className='today_kcal_record'>
      {
        menu.map(item => {
          const { id, name, image, unit, text } = item;
          return (
            <li
              key={id}
              onClick={goToEdit}
            >
              <img src={image} alt="" />
              <span>{text}</span>
              <em>{unit}</em>
            </li>
          )
        })
      }
    </ul>
  );
});

export default TodayKcalRecord;