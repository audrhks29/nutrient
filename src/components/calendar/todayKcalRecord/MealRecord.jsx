import React, { memo, useEffect, useState } from 'react';
import useEditState from '../../../state/edit-state';

const MealRecord = memo(({ name, image, unit, text }) => {
  const { data, selectedDate } = useEditState(state => state);
  const { isPopupOpen } = useEditState(state => state)
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const findData = data.find(item => item.date === selectedDate);
    if (findData) {
      const findPopupData = findData.meal.find(item => item.kind === name);
      setFilteredData(findPopupData)
    }
  }, [data, selectedDate])

  return (
    <li onClick={() => isPopupOpen(name)}>
      <img src={image} alt="" />
      <span>{text}</span>
      <em>{filteredData.kcalSum}{unit}</em>
    </li>
  );
});

export default MealRecord;