import React, { memo, useEffect, useState } from 'react';

import useEditState from '../../state/edit-state';

const TodayKcalRecord = memo(({ id, name, image, unit, text }) => {
  const { healthData, waterData, isPopupOpen, selectedData } = useEditState(state => state)
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
    <li
      key={id}
      onClick={() => isPopupOpen(text, filteredData)}
    >
      <img src={image} alt="" />
      <span>{text}</span>
      <em>
        {id !== 5 && id !== 6 && kcalSum}
        {id == 5 && healthData}
        {id == 6 && waterData}
        {unit}
      </em>
    </li >
  )

});

export default TodayKcalRecord;