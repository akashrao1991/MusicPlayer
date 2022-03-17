import { configureStore, createStore } from '@reduxjs/toolkit'
import playerSlice from './playerReducer'
import {reducer}  from './reducer'

export const store = configureStore({
    reducer:{
        player:playerSlice.reducer
    },

/*     middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
 */

})



