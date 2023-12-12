import React, { memo, useState } from 'react';
import { SearchMealPopupContainer } from '../../styled/EditStyles';
import BtnClose from './../common/BtnClose';
import useMealDataState from './../../state/mealData-state';
import MyInfoRight from './MyInfoRight';
import useEditState from '../../state/edit-state';

const SearchMealPopup = memo(() => {
  const { selectedSearchData, editMode } = useMealDataState(state => state);
  const { isSearchedMealPopupToggle, editModeToggle, attachSelectedSearchData } = useMealDataState(state => state);
  const { addMealsData } = useEditState(state => state);

  const nutInfoArray = [
    { id: 1, title: "탄수화물", unit: "g", amount: selectedSearchData.NUTR_CONT1 },
    { id: 2, title: "단백질", unit: "g", amount: selectedSearchData.NUTR_CONT2 },
    { id: 3, title: "지방", unit: "g", amount: selectedSearchData.NUTR_CONT3 },
    { id: 4, title: "당", unit: "g", amount: selectedSearchData.NUTR_CONT4 },
    { id: 5, title: "나트륨", unit: "mg", amount: selectedSearchData.NUTR_CONT5 },
  ];

  const [editedNutInfoArray, setEditedNutInfoArray] = useState(nutInfoArray);

  const handleInputChange = (index, value) => {
    setEditedNutInfoArray(prevArray => {
      const newArray = [...prevArray];
      newArray[index] = {
        ...newArray[index],
        amount: value,
      };
      return newArray;
    });
  };

  return (
    <SearchMealPopupContainer>
      <div className='searchMealPopup_inner'>
        <h3>{selectedSearchData.DESC_KOR}</h3>
        <ul className='nutInfo'>
          {editedNutInfoArray.map((item, index) => (
            <li key={item.id}>
              <span>{item.title}</span>
              {!editMode && (
                <span>
                  {item.amount}
                  {item.unit}
                </span>
              )}
              {editMode && (
                <span>
                  <input
                    type="text"
                    value={item.amount}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                  />
                  {item.unit}
                </span>
              )}
            </li>
          ))}
        </ul>
        <MyInfoRight
          NUTR_CONT1={selectedSearchData.NUTR_CONT1}
          NUTR_CONT2={selectedSearchData.NUTR_CONT2}
          NUTR_CONT3={selectedSearchData.NUTR_CONT3}
          NUTR_CONT4={selectedSearchData.NUTR_CONT4}
          NUTR_CONT5={selectedSearchData.NUTR_CONT5}
        />
        <BtnClose func={isSearchedMealPopupToggle} />
        <div className='btnBox'>
          {!editMode ? (
            <>
              <button onClick={addMealsData}>추가</button>
              <button onClick={editModeToggle}>수정</button>
            </>
          ) : (
            <>
              <button onClick={editModeToggle}>취소</button>
              <button onClick={() => attachSelectedSearchData(editedNutInfoArray)}>완료</button>
            </>
          )}
        </div>
      </div>
    </SearchMealPopupContainer>
  );
});

export default SearchMealPopup;
