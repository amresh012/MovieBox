import { configureStore } from '@reduxjs/toolkit'
import FavouritesSlice from './FavouritesSlice'

const store = configureStore({
    reducer: {
        favouritesHolder: FavouritesSlice
        }
})

export default store;