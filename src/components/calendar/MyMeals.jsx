import React, { memo } from 'react';
import { MyMealsContainer } from '../../styled/EditStyles';
import useEditState from '../../state/edit-state';

const MyMeals = memo(() => {
  const { selectedData } = useEditState(state => state);
  console.log(selectedData);

  return (
    <MyMealsContainer>
      {selectedData.title}
      <ul>
        {
          selectedData.meals.map(item => {
            return (
              <li key={item.id}>
                <span>{item.name}</span>
                <span>{item.kcal}kcal</span>
                <span>{item.ea}EA</span>
              </li>
            )
          })
        }
      </ul>

    </MyMealsContainer>
  );
});

export default MyMeals;