import React, { memo } from 'react';
import { MyInfoRightContainer } from '../../styled/CalendarDateStyles';

const MyInfoRight = memo((props) => {
  const my_nutrientArray = [
    { id: 1, image: "images/icons/rice.png", text: "탄수화물", amount: props.NUTR_CONT1, unit: "g" },
    { id: 2, image: "images/icons/meat.png", text: "단백질", amount: props.NUTR_CONT2, unit: "g" },
    { id: 3, image: "images/icons/hamburger.png", text: "지방", amount: props.NUTR_CONT3, unit: "g" },
    { id: 4, image: "images/icons/honey.png", text: "당", amount: props.NUTR_CONT4, unit: "g" },
    { id: 5, image: "images/icons/salt.png", text: "나트륨", amount: props.NUTR_CONT5, unit: "mg" },
  ]
  console.log(props);
  return (
    <MyInfoRightContainer>
      <ul className='my_nutrient'>
        {
          my_nutrientArray.map(item => {
            const { id, image, text, amount, unit } = item;
            return (
              <li
                key={id}
                className='nutrient_list'
              >
                <div className='nutrient_img'>
                  <img src={image} alt="" />
                </div>
                <span>{text}</span>
                <div className='graph_out'>
                  <div
                    className='graph_in'
                    style={{
                      width: amount == 0 || amount == "N/A" ? "0%" : `${amount}%`,
                      height: "100%",
                      backgroundColor: "red"
                    }}
                  >
                    <span>{amount}{unit}</span>
                  </div>
                </div>
              </li>
            )
          })
        }
      </ul>
    </MyInfoRightContainer>
  );
});

export default MyInfoRight;