import React, { memo } from 'react';

import MealRecord from './MealRecord';
import HealthWaterRecord from './HealthWaterRecord';

const TodayKcalRecord = memo(() => {
  const mealArray = [
    { "id": 1, "name": "breakfast", "image": "images/icons/breakfast.png", "unit": "kcal", "text": "아침식사" },
    { "id": 2, "name": "lunch", "image": "images/icons/lunch.png", "unit": "kcal", "text": "점심식사" },
    { "id": 3, "name": "dinner", "image": "images/icons/dinner.png", "unit": "kcal", "text": "저녁식사" },
    { "id": 4, "name": "etc", "image": "images/icons/dinner.png", "unit": "kcal", "text": "기타식사" }
  ]

  const healthWaterData = [
    { "id": 5, "name": "muscle", "image": "images/icons/muscle.png", "unit": "kcal", "text": "운동" },
    { "id": 6, "name": "water", "image": "images/icons/water.png", "unit": "ml", "text": "수분섭취" }
  ]
  return (
    <ul className='today_kcal_record'>
      {
        mealArray.map((item, index) => {
          const { name, image, unit, text } = item
          return (
            <MealRecord
              key={index}
              name={name}
              image={image}
              unit={unit}
              text={text}
            />
          )
        })
      }
      {
        healthWaterData.map((item, index) => {
          const { name, image, unit, text } = item
          return (
            <HealthWaterRecord
              key={index}
              name={name}
              image={image}
              unit={unit}
              text={text}
            />
          )
        })
      }
    </ul>
  )

});

export default TodayKcalRecord;