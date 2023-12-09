import React, { memo } from 'react';
import { MyMealsContainer } from '../../styled/EditStyles';

const MyMeals = memo(() => {
  return (
    <MyMealsContainer>
      <form action="">
        <label htmlFor="cars">식사 선택:</label>
        <select id="meals" name="meals">
          <option value="breakfast">아침식사</option>
          <option value="lunch">점심식사</option>
          <option value="dinner">저녁식사</option>
          <option value="etcMeal">기타식사</option>
        </select>
      </form>
    </MyMealsContainer>
  );
});

export default MyMeals;