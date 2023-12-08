import React, { memo, useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import useEditState from '../../state/edit-state';

const TodayKcalRecord = memo(({ id, name, image, unit, text }) => {
  const { healthData, waterData } = useEditState(state => state)
  const { year, month, day } = useParams();
  const navigate = useNavigate()
  const [kcalSum, setKcalSum] = useState(0);
  const [filteredData, setFilteredData] = useState([]);
  const { mealData } = useEditState(state => state);

  const goToEdit = () => {
    navigate(`/calendar/${year}/${month}/${day}/edit`)
  }

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
      onClick={goToEdit}
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