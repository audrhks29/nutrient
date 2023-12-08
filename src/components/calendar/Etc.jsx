import React, { memo } from 'react';

import menu from '../../assets/menu_calendarMeal.json'

import MyInfoRight from './MyInfoRight';

import useEditState from '../../state/edit-state';

const Etc = memo(() => {
  const { healthData, waterData } = useEditState(state => state)
  return (
    <div className='etc_container'>
      <ul>
        {
          menu.map(item => {
            const { id, image, text } = item;
            if (id == 5 || id == 6) {
              return (
                <li
                  key={id}
                  className='etc_list'
                >
                  <div className='img_box'>
                    <img src={image} alt="" />
                    <span>{text}</span>
                  </div>
                  {id == 5 && <em>{healthData}kcal</em>}
                  {id == 6 && <em>{waterData}ml</em>}
                </li>
              )
            }
          })
        }
      </ul>
      <MyInfoRight />
    </div>
  );
});

export default Etc;