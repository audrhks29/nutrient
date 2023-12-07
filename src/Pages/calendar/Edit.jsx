import React, { memo, useMemo } from 'react';
import menu from '../../assets/menu_calendarMeal.json'

import { useParams } from 'react-router-dom';
import Meal from '../../components/calendar/Meal';
import { EditContainer } from '../../styled/CalendarDateStyles';
import Etc from '../../components/calendar/Etc';


const Edit = memo(() => {
  const { year, month, day } = useParams()
  const today = `${year}/${month}/${day}`

  const data = [
    {
      id: 1,
      date: "2023/12/11",
      meal: [
        { id: 1, kindOfMeal: "breakfast", name: "고구마", kcal: 203, ea: 1 },
        { id: 2, kindOfMeal: "breakfast", name: "딸기", kcal: 100, ea: 1 },
        { id: 3, kindOfMeal: "lunch", name: "밥", kcal: 300, ea: 1 },
        { id: 4, kindOfMeal: "lunch", name: "김치찌개", kcal: 500, ea: 1 },
        { id: 5, kindOfMeal: "dinner", name: "삼겹살", kcal: 700, ea: 1 },
        { id: 6, kindOfMeal: "dinner", name: "상추", kcal: 50, ea: 1 },
      ]
    }
  ]

  const findMealData = () => {
    const findData = data.find(item => item.date === today)
    if (findData) {
      return findData.meal
    }
    else {
      return null
    }
  }

  return (
    <EditContainer>
      <ul className='meal_container'>
        {
          menu.map(item => {
            const { id, name, image, unit, text } = item;
            if (id !== 5 && id !== 6) {
              return (
                <Meal key={id}
                  id={id}
                  name={name}
                  image={image}
                  unit={unit}
                  text={text}
                  findMealData={findMealData()}
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