import { createSlice } from "@reduxjs/toolkit";

// Create a slice for managing the favourites state
const favouritesSlice = createSlice({
  name: "favourites",
  initialState: {
    favourites: [], // Initialize the favourites array
  },

  reducers: {
    // Add an item to the favourites array
    addtofavourite: (state, action) => {
      const { id } = action.payload;
      const isFavourite = state.favourites.some((item) => item.id === id);

      if (!isFavourite) {
        state.favourites.push(action.payload);
      }
    },
    // Remove an item from the favourites array
    removefavourite: (state, action) => {
      const { id } = action.payload;
      return state.favourites.filter((item) => item.id !== id);
    },
  },
});

export const { addtofavourite, removefavourite } = favouritesSlice.actions;

export default favouritesSlice.reducer;
