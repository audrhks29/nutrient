import React, { memo } from 'react';

const MyInfoLeft = memo(() => {

  const in_bodyArray = [
    { id: 1, text: "몸무게", unit: "kg" },
    { id: 2, text: "골격근", unit: "kg" },
    { id: 3, text: "체지방량", unit: "kg" },
  ]

  const today_KcalArray = [
    { id: 1, text: "섭취칼로리", image: "/images/icons/eat.png", unit: "kcal" },
    { id: 2, text: "소모칼로리", image: "/images/icons/run.png", unit: "kcal" }
  ]

  return (
    <div className='my_info_left'>
      <ul className='in_body'>
        {
          in_bodyArray.map(item => {
            const { id, text, unit } = item;
            return (
              <li key={id}>
                <span>{text}</span>
                <div><input type="text" />{unit}</div>
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
                <span>0 {unit}</span>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
});

export default MyInfoLeft;