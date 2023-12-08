import create from 'zustand';
const useUserState = create((set) => ({
  userData: { id: 1, name: "Lee", height: 182, weight: 76, bodyFat: 10, skeletalMuscle: 38 }
}));

export default useUserState;