import create from 'zustand';
import axios from 'axios';
const useMealDataState = create((set, getState) => ({
  testData: [],
  searchKeywords: "",

  searchedMealPopupState: false,

  selectedSearchData: [],
  editMode: false,
  fetchData: async () => {
    const apiUrl = 'https://apis.data.go.kr/1471000/FoodNtrIrdntInfoService1/getFoodNtrItdntList1';
    const apiKey = '4ad7fZ%2BQEQsdtGvuaJKULjtO3IqlBvrSybctznGyRbfutwxzdsNZ16gEpXGScj18%2BrCgy4aiIIub44OW%2F45hlA%3D%3D';
    const descKor = getState().searchKeywords;
    try {
      const response = await axios.get(`${apiUrl}?serviceKey=${apiKey}&desc_kor=${descKor}&pageNo=1&numOfRows=80&type=json`);
      set({ testData: response.data });

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },

  changeSearchKeyword: (e) => {
    const value = e
    set({ searchKeywords: value });
  },

  isSearchedMealPopupToggle: (item) => {
    const searchedMealPopupState = getState().searchedMealPopupState;
    if (!searchedMealPopupState) {
      set({
        searchedMealPopupState: true,
        selectedSearchData: item
      })
    }
    else {
      set({
        searchedMealPopupState: false,
        selectedSearchData: [],
        editMode: false
      })
    }
  },

  editModeToggle: () => {
    const editMode = getState().editMode;
    set({ editMode: !editMode })
  },

  attachSelectedSearchData: (editedNutInfoArray) => {
    const selectedSearchData = getState().selectedSearchData;
    set({
      selectedSearchData: {
        ...selectedSearchData,
        DESC_KOR: selectedSearchData.DESC_KOR,
        NUTR_CONT1: editedNutInfoArray[0].amount,
        SERVING_WT: editedNutInfoArray[1].amount,
        NUTR_CONT2: editedNutInfoArray[2].amount,
        NUTR_CONT3: editedNutInfoArray[3].amount,
        NUTR_CONT4: editedNutInfoArray[4].amount,
        NUTR_CONT5: editedNutInfoArray[5].amount,
        NUTR_CONT6: editedNutInfoArray[6].amount,
      },
      editMode: false
    });
  }
}));

export default useMealDataState;