import { configureStore, createSlice } from "@reduxjs/toolkit";

let userAccountSlice = createSlice({
  name: "userAccount",

  initialState: {
    amount: 100,
    userName: "rohit",
  },

  //member function/reducer function
  reducers: {
    deposit: (state) => {
      state.amount += 100;
    },

    withdraw: (state) => {
      state.amount -= 50;
    },
  },
});

//making member function public
export let { deposit, withdraw } = userAccountSlice.actions;

//configured the store & making static variable public
export default configureStore({
  reducer: { userAccount: userAccountSlice.reducer },
});
