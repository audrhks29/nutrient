import React, { memo, useEffect, useState } from 'react';

import useEditState from '../../state/edit-state';

const TodayKcalRecord = memo(({ id, name, image, unit, text }) => {
  const { healthData, waterData, isPopupOpen } = useEditState(state => state)
  const [filteredData, setFilteredData] = useState([]);
  const { mealData } = useEditState(state => state);

  useEffect(() => {
    if (mealData) {
      setFilteredData(mealData.filter(item => item.kind === name))
    }
    else {
      setFilteredData([])
    }
  }, [mealData])
  return (
    <li
      key={id}
      onClick={() => isPopupOpen(name, text, filteredData)}
    >
      <img src={image} alt="" />
      <span>{text}</span>
      <em>
        {id !== 5 && id !== 6 && filteredData.length > 0 && filteredData[0].kcalSum}
        {id !== 5 && id !== 6 && filteredData.length == 0 && 0}
        {id == 5 && healthData}
        {id == 6 && waterData}
        {unit}
      </em>
    </li >
  )

});

export default TodayKcalRecord;