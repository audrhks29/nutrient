import React, { memo } from 'react';
import { MyMealsContainer } from '../../styled/EditStyles';
import useEditState from '../../state/edit-state';

const MyMeals = memo(() => {
  const { selectedData, data } = useEditState(state => state);
  return (
    <MyMealsContainer>
      <h3>{selectedData.kor_kind}</h3>
      <ul>
        <li>
          <p className='s1' style={{ textAlign: "center" }}>품목</p>
          <p className='s2'>칼로리</p>
          <p className='s3'>1회제공량</p>
          <p className='s4'>수정</p>
        </li>
        {
          selectedData && selectedData.data && Array.isArray(selectedData.data) && selectedData.data.length > 0 ?
            (selectedData.data.map((item, index) => {
              const { DESC_KOR, NUTR_CONT1, SERVING_WT } = item
              return (
                <li key={index}>
                  <p className='s1'>{DESC_KOR}</p>
                  <p className='s2'>{NUTR_CONT1}kcal</p>
                  <p className='s3'>{SERVING_WT}g</p>
                  <div className='s4'>
                    <button>수정</button>
                    <button>삭제</button>
                  </div>
                </li>
              )
            })
            ) : <li>ㅇㅇ</li>
        }
      </ul>
      <div className='kcalSum'>
        {/* <strong>총 {selectedData.meals[0].kcalSum}kcal</strong> */}
      </div>
    </MyMealsContainer>
  );
});

export default MyMeals;