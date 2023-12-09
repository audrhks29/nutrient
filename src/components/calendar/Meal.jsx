import React, { memo, useEffect, useState } from 'react';

import useEditState from '../../state/edit-state';

const Meal = memo(({ name, image, unit, text }) => {
  const [kcalSum, setKcalSum] = useState(0);
  const [filteredData, setFilteredData] = useState([]);
  const { mealData } = useEditState(state => state);

  useEffect(() => {
    if (mealData) {
      setFilteredData(mealData.filter(item => item.kindOfMeal === name))
    }
    else {
      setFilteredData([])
    }
  }, [mealData])

  useEffect(() => {
    calSum()
  }, [filteredData])

  const calSum = () => {
    const sum = filteredData.reduce((acc, cur) => {
      return acc + cur.kcal;
    }, 0)

    setKcalSum(sum)
  }

  return (
    <li className='meal_list'>
      <div className='img_box'>
        <img src={image} alt="" />
        <span>{text}</span>
      </div>
      {
        filteredData && <div>
          <ul>
            {
              filteredData.map(item => {
                return (
                  <li key={item.id}>
                    <span>{item.name}</span>
                    <span>{item.kcal}kcal</span>
                    <span>{item.ea}개</span>
                  </li>
                )
              })
            }
          </ul>
        </div>
      }
      <div>총 칼로리 {kcalSum}{unit}</div>
    </li>
  );
});

export default Meal;