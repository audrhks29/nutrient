import React, { memo } from 'react';
import { EditPopupContainer } from '../../styled/EditStyles';
import SearchMeals from './SearchMeals';
import MyMeals from './MyMeals';

import useEditState from '../../state/edit-state';
import Background from '../Background';
import useMealDataState from '../../state/mealData-state';
import SearchMealPopup from './SearchMealPopup';
import BtnClose from './../common/BtnClose';

const EditPopup = memo(() => {
  const { isPopupClose } = useEditState(state => state);
  const { searchedMealPopupState } = useMealDataState(state => state);
  return (
    <>
      <EditPopupContainer>
        <div className='editPopup_inner'>
          <MyMeals />
          <SearchMeals />
          <BtnClose
            func={isPopupClose}
            top={20}
            right={20}
          />
        </div>
        {searchedMealPopupState && <Background borderRadius={30} />}
        {searchedMealPopupState && <SearchMealPopup />}
      </EditPopupContainer>
    </>
  );
});

export default EditPopup; 