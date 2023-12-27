import create from 'zustand';

const useEditState = create((set, getState) => ({
  data: [
    {
      id: 1,
      date: "2023/12/11",
      meal: [
        {
          id: 1, kind: "breakfast", kor_kind: "아침식사", kcalSum: 55,
          data: [
            { id: 1, DESC_KOR: "고구마", SERVING_WT: 203, ANIMAL_PLANT: "", BGN_YEAR: "", NUTR_CONT1: 300, NUTR_CONT2: 300, NUTR_CONT3: 300, NUTR_CONT4: 300, NUTR_CONT5: 300, NUTR_CONT6: 300, NUTR_CONT7: 300, NUTR_CONT8: 300, NUTR_CONT9: 300 },
            { id: 2, DESC_KOR: "고구마", SERVING_WT: 203, ANIMAL_PLANT: "", BGN_YEAR: "", NUTR_CONT1: 300, NUTR_CONT2: 300, NUTR_CONT3: 300, NUTR_CONT4: 300, NUTR_CONT5: 300, NUTR_CONT6: 300, NUTR_CONT7: 300, NUTR_CONT8: 300, NUTR_CONT9: 300 },
          ]
        },
        {
          id: 2, kind: "lunch", kor_kind: "점심식사", kcalSum: 60,
          data: [
            { id: 1, DESC_KOR: "고구마", SERVING_WT: 203, ANIMAL_PLANT: "", BGN_YEAR: "", NUTR_CONT1: 300, NUTR_CONT2: 300, NUTR_CONT3: 300, NUTR_CONT4: 300, NUTR_CONT5: 300, NUTR_CONT6: 300, NUTR_CONT7: 300, NUTR_CONT8: 300, NUTR_CONT9: 300 },
            { id: 2, DESC_KOR: "고구마", SERVING_WT: 203, ANIMAL_PLANT: "", BGN_YEAR: "", NUTR_CONT1: 300, NUTR_CONT2: 300, NUTR_CONT3: 300, NUTR_CONT4: 300, NUTR_CONT5: 300, NUTR_CONT6: 300, NUTR_CONT7: 300, NUTR_CONT8: 300, NUTR_CONT9: 300 },
          ]
        },
        {
          id: 3, kind: "dinner", kor_kind: "저녁식사", kcalSum: 300,
          data: [
            { id: 1, DESC_KOR: "고구마", SERVING_WT: 203, ANIMAL_PLANT: "", BGN_YEAR: "", NUTR_CONT1: 300, NUTR_CONT2: 300, NUTR_CONT3: 300, NUTR_CONT4: 300, NUTR_CONT5: 300, NUTR_CONT6: 300, NUTR_CONT7: 300, NUTR_CONT8: 300, NUTR_CONT9: 300 },
            { id: 2, DESC_KOR: "저녁", SERVING_WT: 203, ANIMAL_PLANT: "", BGN_YEAR: "", NUTR_CONT1: 300, NUTR_CONT2: 300, NUTR_CONT3: 300, NUTR_CONT4: 300, NUTR_CONT5: 300, NUTR_CONT6: 300, NUTR_CONT7: 300, NUTR_CONT8: 300, NUTR_CONT9: 300 },
          ]
        },
        {
          id: 4, kind: "etc", kor_kind: "기타식사", kcalSum: 300,
          data: [
            { id: 1, DESC_KOR: "고구마", SERVING_WT: 203, ANIMAL_PLANT: "", BGN_YEAR: "", NUTR_CONT1: 300, NUTR_CONT2: 300, NUTR_CONT3: 300, NUTR_CONT4: 300, NUTR_CONT5: 300, NUTR_CONT6: 300, NUTR_CONT7: 300, NUTR_CONT8: 300, NUTR_CONT9: 300 },
            { id: 2, DESC_KOR: "고구마", SERVING_WT: 203, ANIMAL_PLANT: "", BGN_YEAR: "", NUTR_CONT1: 300, NUTR_CONT2: 300, NUTR_CONT3: 300, NUTR_CONT4: 300, NUTR_CONT5: 300, NUTR_CONT6: 300, NUTR_CONT7: 300, NUTR_CONT8: 300, NUTR_CONT9: 300 },
          ]
        },
      ],
      health: 203,
      water: 300,
    },
    {
      id: 2,
      date: "2023/12/13",
      meal: [
        {
          id: 1, kind: "breakfast", kcalSum: 55,
          data: [
            { id: 1, DESC_KOR: "고구마", SERVING_WT: 203, ANIMAL_PLANT: "", BGN_YEAR: "", NUTR_CONT1: 300, NUTR_CONT2: 300, NUTR_CONT3: 300, NUTR_CONT4: 300, NUTR_CONT5: 300, NUTR_CONT6: 300, NUTR_CONT7: 300, NUTR_CONT8: 300, NUTR_CONT9: 300 },
            { id: 2, DESC_KOR: "고구마", SERVING_WT: 203, ANIMAL_PLANT: "", BGN_YEAR: "", NUTR_CONT1: 300, NUTR_CONT2: 300, NUTR_CONT3: 300, NUTR_CONT4: 300, NUTR_CONT5: 300, NUTR_CONT6: 300, NUTR_CONT7: 300, NUTR_CONT8: 300, NUTR_CONT9: 300 },
          ]
        },
        {
          id: 2, kind: "lunch", kcalSum: 60,
          data: [
            { id: 1, DESC_KOR: "고구마", SERVING_WT: 203, ANIMAL_PLANT: "", BGN_YEAR: "", NUTR_CONT1: 300, NUTR_CONT2: 300, NUTR_CONT3: 300, NUTR_CONT4: 300, NUTR_CONT5: 300, NUTR_CONT6: 300, NUTR_CONT7: 300, NUTR_CONT8: 300, NUTR_CONT9: 300 },
            { id: 2, DESC_KOR: "고구마", SERVING_WT: 203, ANIMAL_PLANT: "", BGN_YEAR: "", NUTR_CONT1: 300, NUTR_CONT2: 300, NUTR_CONT3: 300, NUTR_CONT4: 300, NUTR_CONT5: 300, NUTR_CONT6: 300, NUTR_CONT7: 300, NUTR_CONT8: 300, NUTR_CONT9: 300 },
          ]
        },
        {
          id: 3, kind: "dinner", kcalSum: 300,
          data: [
            { id: 1, DESC_KOR: "고구마", SERVING_WT: 203, ANIMAL_PLANT: "", BGN_YEAR: "", NUTR_CONT1: 300, NUTR_CONT2: 300, NUTR_CONT3: 300, NUTR_CONT4: 300, NUTR_CONT5: 300, NUTR_CONT6: 300, NUTR_CONT7: 300, NUTR_CONT8: 300, NUTR_CONT9: 300 },
            { id: 2, DESC_KOR: "저녁구마", SERVING_WT: 203, ANIMAL_PLANT: "", BGN_YEAR: "", NUTR_CONT1: 300, NUTR_CONT2: 300, NUTR_CONT3: 300, NUTR_CONT4: 300, NUTR_CONT5: 300, NUTR_CONT6: 300, NUTR_CONT7: 300, NUTR_CONT8: 300, NUTR_CONT9: 300 },
          ]
        },
        {
          id: 4, kind: "etc", kcalSum: 300,
          data: [
            { id: 1, DESC_KOR: "고구마", SERVING_WT: 203, ANIMAL_PLANT: "", BGN_YEAR: "", NUTR_CONT1: 300, NUTR_CONT2: 300, NUTR_CONT3: 300, NUTR_CONT4: 300, NUTR_CONT5: 300, NUTR_CONT6: 300, NUTR_CONT7: 300, NUTR_CONT8: 300, NUTR_CONT9: 300 },
            { id: 2, DESC_KOR: "고구마", SERVING_WT: 203, ANIMAL_PLANT: "", BGN_YEAR: "", NUTR_CONT1: 300, NUTR_CONT2: 300, NUTR_CONT3: 300, NUTR_CONT4: 300, NUTR_CONT5: 300, NUTR_CONT6: 300, NUTR_CONT7: 300, NUTR_CONT8: 300, NUTR_CONT9: 300 },
          ]
        },
      ],
      health: 203,
      water: 300,
    }
  ],
  selectedDate: null,

  popupState: false,

  selectedData: null, // selectedDate와 kind에 맞는 데이터
  initToday: (today) => {
    set({ selectedDate: today })
  },

  settingData: () => {
    const data = getState().data;
    const selectedDate = getState().selectedDate;
    const selectedData = getState().selectedData;
    const findData = data.find(item => item.date === selectedDate);
    if (findData && selectedData) {
      const findPopupData = findData.meal.find(item => item.kind === selectedData.kind);
      set({ selectedData: findPopupData })
    }
  },

  isPopupOpen: (name) => {
    const data = getState().data;
    const selectedDate = getState().selectedDate;
    set({ popupState: true })
    const findData = data.find(item => item.date === selectedDate);
    const findPopupData = findData.meal.find(item => item.kind === name);
    if (findPopupData) {
      set({ selectedData: findPopupData })
    }
  },

  isPopupClose: () => {
    set({
      popupState: false,
      selectedData: null
    })
  },

  insertData: (editedNutInfoArray, selectedSearchData) => {
    const selectedData = getState().selectedData;
    const data = getState().data;
    const selectedDate = getState().selectedDate;
    const dataIdx = data.findIndex(item => item.date === selectedDate);
    const mealIdx = data[dataIdx].meal.findIndex(item => item.kind === selectedData.kind);
    if (selectedSearchData && editedNutInfoArray) {
      set((state) => {
        const newDataArray = state.data.map((dataItem, dataIndex) => {
          if (dataIndex === dataIdx) {
            return {
              ...dataItem,
              meal: dataItem.meal.map((mealItem, mealIndex) => {
                if (mealIndex === mealIdx) {
                  return {
                    ...mealItem,
                    data: [
                      ...mealItem.data,
                      {
                        id: mealItem.data.length + 1,
                        DESC_KOR: selectedSearchData.DESC_KOR,
                        NUTR_CONT1: editedNutInfoArray[0].amount,
                        SERVING_WT: editedNutInfoArray[1].amount,
                        NUTR_CONT2: editedNutInfoArray[2].amount,
                        NUTR_CONT3: editedNutInfoArray[3].amount,
                        NUTR_CONT4: editedNutInfoArray[4].amount,
                        NUTR_CONT5: editedNutInfoArray[5].amount,
                        NUTR_CONT6: editedNutInfoArray[6].amount,
                      },
                    ],
                  };
                }
                return mealItem;
              }),
            };
          }
          return dataItem;
        });

        return {
          ...state,
          data: newDataArray,
        };
      });
    }
    // const PopupData = getState().PopupData
    // console.log(selectedData.kind);
    // const findData = PopupData.meal.find(item => item.kind === selectedData.kind);

    // if (findData) {
    //   set({ selectedData: findData })
    // }
  },
}))

export default useEditState