import create from 'zustand';

const useEditState = create((set, getState) => ({
  data: [
    {
      id: 1,
      date: "2023/12/11",
      meal: [
        {
          id: 1, kind: "breakfast", kcalSum: 55,
          data: [
            { id: 1, name: "고구마", kcal: 203, ea: 1 },
            { id: 2, name: "딸기", kcal: 100, ea: 1 },
          ]
        },
        {
          id: 2, kind: "lunch", kcalSum: 60,
          data: [
            { id: 1, name: "밥", kcal: 300, ea: 1 },
            { id: 2, name: "김치찌개", kcal: 500, ea: 1 }
          ]
        },
        {
          id: 3, kind: "dinner", kcalSum: 300,
          data: [
            { id: 1, name: "d", kcal: 245, ea: 1 },
            { id: 2, name: "w", kcal: 965, ea: 1 }
          ]
        },
        {
          id: 4, kind: "etc", kcalSum: 300,
          data: [
            { id: 1, name: "a", kcal: 276, ea: 1 },
            { id: 2, name: "f", kcal: 845, ea: 1 }
          ]
        },
      ],
      // health: 203,
      water: 300,
    }
  ],
  mealData: [],
  healthData: 0,
  waterData: 0,

  selectedDate: null,

  popupState: false,
  selectedData: {
    title: null,
    meals: [],
  },

  initToday: (today) => {
    set({ selectedDate: today })
  },

  settingData: () => {
    const data = getState().data;
    const selectedDate = getState().selectedDate;
    const findData = data.find(item => item.date === selectedDate)
    if (findData) {
      set({
        mealData: findData.meal,
        healthData: findData.health ? findData.health : 0,
        waterData: findData.water ? findData.water : 0
      })
    }
    else {
      set({
        mealData: []
      })
    }
  },

  isPopupOpen: (name, text, filteredData) => {
    const selectedData = getState().selectedData;
    set({
      popupState: true,
      selectedData: {
        ...selectedData,
        name: name,
        title: text,
        meals: filteredData
      },
    })
  },

  isPopupClose: () => { set({ popupState: false }) },

  addMealsData: (selectedSearchData) => {
    const selectedDate = getState().selectedDate;
    const selectedData = getState().selectedData;
    const data = getState().data;
    const aa = data.find(item => item.date === selectedDate)
    const bb = aa.meal.find(item => item.kind === selectedData.name)
  },


}))

export default useEditState