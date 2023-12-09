import React, { memo, useEffect, useState } from 'react';

import useEditState from '../../state/edit-state';
import useUserState from './../../state/user-state';

import { MyInfoLeftContainer } from './../../styled/CalendarDateStyles';

const MyInfoLeft = memo(() => {
  const [kcalSum, setKcalSum] = useState(0);
  const { mealData, healthData } = useEditState(state => state);
  const { userData } = useUserState(state => state);

  useEffect(() => {
    calSum()
  }, [mealData])

  const in_bodyArray = [
    { id: 1, text: "몸무게", unit: "kg" },
    { id: 2, text: "골격근", unit: "kg" },
    { id: 3, text: "체지방량", unit: "kg" },
  ]

  const today_KcalArray = [
    { id: 1, text: "섭취칼로리", image: "images/icons/eat.png", unit: "kcal" },
    { id: 2, text: "소모칼로리", image: "images/icons/run.png", unit: "kcal" }
  ]

  const userDataMap = {
    1: userData.weight,
    2: userData.skeletalMuscle,
    3: userData.bodyFat,
  };

  const calSum = () => {
    const sum = mealData.reduce((acc, cur) => {
      return acc + cur.kcal;
    }, 0)

    setKcalSum(sum)
  }

  return (
    <MyInfoLeftContainer>
      <ul className='in_body'>
        {
          in_bodyArray.map(item => {
            const { id, text, unit } = item;
            return (
              <li key={id}>
                <span>{text}</span>
                <p>{userDataMap[id]}{unit}</p>
              </li>
            )
          })
        }
      </ul>
      <ul className='today_kcal'>
        {
          today_KcalArray.map(item => {
            const { id, text, image, unit } = item;
            return (
              <li key={id}>
                <span>{text}</span>
                <img src={image} alt="" />
                <span>
                  {id == 1 && kcalSum}
                  {id == 2 && healthData}
                  {unit}
                </span>
              </li>
            )
          })
        }
      </ul>
    </MyInfoLeftContainer>
  );
});

export default MyInfoLeft;