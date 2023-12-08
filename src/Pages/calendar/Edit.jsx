import React, { memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { EditContainer } from '../../styled/EditStyles';

import menu from '../../assets/menu_calendarMeal.json'

import Meal from '../../components/calendar/Meal';
import Etc from '../../components/calendar/Etc';

import useEditState from '../../state/edit-state';

const Edit = memo(() => {
  const { year, month, day } = useParams();
  const { initToday, settingData } = useEditState(state => state);

  const today = `${year}/${month}/${day}`
  useEffect(() => {
    initToday(today)
    settingData()
  }, [today]);

  return (
    <EditContainer>
      <ul className='meal_container'>
        {
          menu.map(item => {
            const { id, name, image, unit, text } = item;
            if (id !== 5 && id !== 6) {
              return (
                <Meal key={id}
                  name={name}
                  image={image}
                  unit={unit}
                  text={text}
                />
              )
            }
          })
        }
      </ul>
      <Etc />
    </EditContainer>
  );
});

export default Edit;