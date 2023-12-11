import React, { memo, useEffect } from 'react';
import { EditPopupContainer } from '../../styled/EditStyles';
import SearchMeals from './SearchMeals';
import MyMeals from './MyMeals';
import { AiOutlineClose } from "react-icons/ai";
import useEditState from '../../state/edit-state';
const EditPopup = memo(() => {
  const { isPopupClose } = useEditState(state => state);

  return (
    <EditPopupContainer>
      <MyMeals />
      <SearchMeals />
      <div
        className="closeBox"
        onClick={isPopupClose}
      >
        <i><AiOutlineClose /></i>
      </div>
    </EditPopupContainer>
  );
});

export default EditPopup; 