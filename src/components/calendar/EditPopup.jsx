import React, { memo, useEffect } from 'react';
import { EditPopupContainer } from '../../styled/EditStyles';
import SearchMeals from './SearchMeals';
import MyMeals from './MyMeals';

const EditPopup = memo(() => {


  return (
    <EditPopupContainer>
      <MyMeals />
      <SearchMeals />
    </EditPopupContainer>
  );
});

export default EditPopup; 