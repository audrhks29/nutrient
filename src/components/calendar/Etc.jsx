import React, { memo } from 'react';
import menu from '../../assets/menu_calendarMeal.json'
import MyInfoRight from './MyInfoRight';

const Etc = memo(() => {
  console.log(menu);
  return (
    <>
      <div className='etc_container'>
        <ul>
          {
            menu.map(item => {
              const { id, name, image, unit, text } = item;
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
                    <em>소모칼로리 0kcal</em>
                  </li>
                )
              }
            })
          }
        </ul>
        <MyInfoRight />
      </div>
    </>
  );
});

export default Etc;