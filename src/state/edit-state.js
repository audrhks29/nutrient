import create from 'zustand';

const useEditState = create((set, getState) => ({
  data: [
    {
      id: 1,
      date: "2023/12/11",
      meal: [
        { id: 1, kindOfMeal: "breakfast", name: "고구마", kcal: 203, ea: 1 },
        { id: 2, kindOfMeal: "breakfast", name: "딸기", kcal: 100, ea: 1 },
        { id: 3, kindOfMeal: "lunch", name: "밥", kcal: 300, ea: 1 },
        { id: 4, kindOfMeal: "lunch", name: "김치찌개", kcal: 500, ea: 1 },
        { id: 5, kindOfMeal: "dinner", name: "삼겹살", kcal: 700, ea: 1 },
        { id: 6, kindOfMeal: "dinner", name: "상추", kcal: 50, ea: 1 },
      ],
      health: 203,
    }
  ],
  mealData: [],
  healthData: [],
  waterData: [],

  selectedDate: null,

  popupState: false,
  selectedData: {
    title: null,
    meals: []
  }
  ,
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
        healthData: findData.health,
        waterData: findData.water
      })
    }
    else {
      set({
        mealData: [],
        healthData: [],
        waterData: []
      })
    }
  },

  isPopupOpen: (text, filteredData) => {
    const popupState = getState().popupState;
    const selectedData = getState().selectedData;
    set({
      popupState: !popupState,
      selectedData: {
        ...selectedData,
        title: text,
        meals: filteredData
      },
    })
  },

  isPopupClose: () => {
    const popupState = getState().popupState;
    set({ popupState: !popupState })
  },

  addMealsData: () => {

  }
}))

export default useEditState