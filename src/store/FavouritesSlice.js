import { createSlice } from "@reduxjs/toolkit";
const favouritesSlice = createSlice({
  name: "favourites",
  initialState: {
    favourites: [],
  },

  reducers: {
    addtofavourite: (state, action) => {
      const exists = state.favourites.some(
        (item) => item.id === action.payload.id
      );

     if (!exists) {
       state.favourites.push(action.payload);
     }
    },
    removefavourite(state, action) {
      return state.favourites.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addtofavourite, removefavourite } = favouritesSlice.actions;

export default favouritesSlice.reducer;
