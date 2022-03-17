import { applyMiddleware, combineReducers, configureStore, createStore } from '@reduxjs/toolkit'
import playerSlice from './playerReducer'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    // whitelist: ['bookmarks']
  }

const rootReducer = combineReducers({
    player:playerSlice.reducer
    // player:persistReducer(persistConfig,playerSlice.reducer)
})
export const store  = configureStore({
    reducer:rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})
/* export const store = createStore(rootReducer,applyMiddleware(

))
 *//* export const store = configureStore({
    reducer:{
        player:
    },
 */
/*     middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
 */

// })
// export const persistor = persistStore(store)



