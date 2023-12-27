import React, { memo, useEffect, useState } from 'react';
import useEditState from '../../../state/edit-state';

const HealthWaterRecord = memo(({ name, image, unit, text }) => {
  const { data, selectedDate } = useEditState(state => state);
  const { isPopupOpen } = useEditState(state => state)
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const findData = data.find(item => item.date === selectedDate);
    if (name === "muscle" && findData) {
      const healthData = findData.health
      setFilteredData(healthData)
    }
    if (name === "water" && findData) {
      const waterData = findData.water
      setFilteredData(waterData)
    }
  }, [data, selectedDate])

  return (
    <li>
      <img src={image} alt="" />
      <span>{text}</span>
      <em>{filteredData}{unit}</em>
    </li>
  );
});

export default HealthWaterRecord;