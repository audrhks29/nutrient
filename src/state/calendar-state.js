import create from 'zustand';

const useCalendarState = create((set, getState) => ({
  date: 0,
  dateArray: [],

  initDate: () => {
    const date = new Date();

    set({
      date: date,
      dateArray: Array.from(Array(42), (_, index) => ({ id: index + 1 })),
    })
  },

  calData: () => {
    const date = getState().date;
    const dateArray = getState().dateArray;

    const firstDayOfWeek = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    // 날짜 재설정
    const updatedBoxArray = [...dateArray].map((item) => {
      return {
        ...item,
        year: undefined,
        month: undefined,
        day: undefined
      };
    });

    let dayCounter = 1;

    for (let i = firstDayOfWeek; i < dateArray.length; i++) {
      if (dayCounter <= lastDayOfMonth) {
        updatedBoxArray[i].year = date.getFullYear();
        updatedBoxArray[i].month = date.getMonth();
        updatedBoxArray[i].day = dayCounter;
        dayCounter++;
      }
    }
    set({ dateArray: updatedBoxArray, });
  },

  clickPrevArrow: () => {
    const date = getState().date;
    const year = date.getFullYear();
    const month = date.getMonth();
    const newDate = new Date(year, month - 1);
    set({ date: newDate });
  },

  clickNextArrow: () => {
    const date = getState().date;
    const year = date.getFullYear();
    const month = date.getMonth();
    const newDate = new Date(year, month + 1);
    set({ date: newDate });
  }
}));

export default useCalendarState;