import { configureStore } from '@reduxjs/toolkit'
import favouritesReducer from './FavouritesSlice'

const store = configureStore({
    reducer: {
        favouritesHolder: favouritesReducer
        }
})

export default store;