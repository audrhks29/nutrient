import create from 'zustand';
import axios from 'axios';
const useAppState = create((set) => ({
  data: [],
  fetchData: async () => {
    const apiUrl = 'https://apis.data.go.kr/1471000/FoodNtrIrdntInfoService1/getFoodNtrItdntList1';
    const apiKey = '4ad7fZ%2BQEQsdtGvuaJKULjtO3IqlBvrSybctznGyRbfutwxzdsNZ16gEpXGScj18%2BrCgy4aiIIub44OW%2F45hlA%3D%3D';
    try {
      const response = await axios.get(`${apiUrl}?serviceKey=${apiKey}&desc_kor=%EC%B4%88%EC%BD%94%ED%8C%8C%EC%9D%B4&pageNo=1&numOfRows=80&type=json`);
      set({ data: response.data });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
}));

export default useAppState;