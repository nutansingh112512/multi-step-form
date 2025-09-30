import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    email: "",
    phone: "",
    plan: {
      title: "Arcade",
      price: 9,
    },
    selectedAddOn: [],
    yearly: false
  },
  reducers: {
    updateForm(state, action) {
      console.log(state);
      return { ...state, ...action.payload };
    },
  },
});

export const { updateForm } = formSlice.actions;
export const formReducer = formSlice.reducer;
