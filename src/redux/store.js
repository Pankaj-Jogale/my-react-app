import { configureStore, createSlice } from "@reduxjs/toolkit";

let userAccountSlice = createSlice({
  name: "userAccount",

  initialState: {
    amount: 0,
    userName: "rohit",
  },

  //member function/reducer function
  reducers: {
    deposit: (state, action) => {
      state.amount += action.payload;
    },

    withdraw: (state, action) => {
      state.amount -= action.payload;
    },
  },
});

//making member function public
export let { deposit, withdraw } = userAccountSlice.actions;

//configured the store & making static variable public
export default configureStore({
  reducer: { userAccount: userAccountSlice.reducer },
});
