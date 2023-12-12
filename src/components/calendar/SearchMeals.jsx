import React, { memo } from 'react';

import useMealDataState from '../../state/mealData-state';

import { SearchMealsContainer } from '../../styled/EditStyles';

const SearchMeals = memo(() => {
  const { testData, searchKeywords, selectedSearchData } = useMealDataState(state => state);
  const { fetchData, changeSearchKeyword, isSearchedMealPopupToggle } = useMealDataState(state => state);
  return (
    <SearchMealsContainer>
      <input
        type="text"
        value={searchKeywords}
        onChange={(e) => changeSearchKeyword(e.target.value)}
        placeholder='검색어를 입력해주세요'
      />
      <button
        onClick={fetchData}
      >
        검색
      </button>
      <table>
        <colgroup>
          <col width={200} />
          <col width={100} />
          <col width={100} />
          <col width={200} />
          <col width={100} />
        </colgroup>
        <thead>
          <tr>
            <th>품목</th>
            <th>1회 제공량</th>
            <th>열량</th>
            <th>가공업체</th>
            <th>기타</th>
            {/* <th>탄수화물</th>
            <th>단백질</th>
            <th>지방</th>
            <th>당류</th>
            <th>나트륨</th> */}
          </tr>
        </thead>
        <tbody>
          {
            testData && testData.body && testData.body.items &&
            testData.body.items.map((item, index) => {
              return (
                <tr
                  key={index}
                >
                  <td>{item.DESC_KOR}</td>
                  <td>{item.SERVING_WT}g</td>
                  <td>{item.NUTR_CONT1}kcal</td>
                  <td>{item.ANIMAL_PLANT}</td>
                  <td>
                    <button
                      onClick={() => isSearchedMealPopupToggle(item)}
                    >
                      추가
                    </button>
                  </td>
                  {/* <td>{item.NUTR_CONT2}g</td>
                <td>{item.NUTR_CONT3}g</td>
                <td>{item.NUTR_CONT4}g</td>
                <td>{item.NUTR_CONT5}g</td>
                <td>{item.NUTR_CONT6}mg</td> */}
                </tr>
              )
            })}
        </tbody>
      </table>
    </SearchMealsContainer>
  );
});

export default SearchMeals;