import React, { memo } from 'react';
import { MyInfoRightContainer } from '../../styled/CalendarDateStyles';

const MyInfoRight = memo(() => {
  const my_nutrientArray = [
    { id: 1, image: "/images/icons/rice.png", text: "탄수화물", },
    { id: 2, image: "/images/icons/meat.png", text: "단백질", },
    { id: 3, image: "/images/icons/hamburger.png", text: "지방", },
    { id: 4, image: "/images/icons/honey.png", text: "당", },
    { id: 5, image: "/images/icons/salt.png", text: "나트륨", },
  ]

  return (
    <MyInfoRightContainer>
      <ul className='my_nutrient'>
        {
          my_nutrientArray.map(item => {
            const { id, image, text } = item;
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
                  <div className='graph_in'>
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