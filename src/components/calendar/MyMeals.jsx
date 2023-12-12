import React, { memo } from 'react';
import { MyMealsContainer } from '../../styled/EditStyles';
import useEditState from '../../state/edit-state';

const MyMeals = memo(() => {
  const { selectedData } = useEditState(state => state);
  const editMeal = (item) => {
    console.log(item);
  }
  return (
    <MyMealsContainer>
      <h3>{selectedData.title}</h3>
      <ul>
        <li>
          <p className='s1'>품목</p>
          <p className='s2'>칼로리</p>
          <p className='s3'>수량</p>
          <p className='s4'>수정</p>
        </li>
        {
          selectedData.meals.map((meal, mealIndex) => (
            meal.data.map((item, itemIndex) => {
              const { name, kcal, ea } = item
              return (
                <li key={`${mealIndex}-${itemIndex}`}>
                  <p className='s1'>{name}</p>
                  <p className='s2'>{kcal}kcal</p>
                  <p className='s3'>{ea}EA</p>
                  <div className='s4'>
                    <button onClick={() => editMeal(item)}>수정</button>
                    <button>삭제</button>
                  </div>
                </li>
              )
            })
          ))
        }
      </ul>
      <div className='kcalSum'>
        <strong>총 {selectedData.meals[0].kcalSum}kcal</strong>
      </div>
    </MyMealsContainer>
  );
});

export default MyMeals;