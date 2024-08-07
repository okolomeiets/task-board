import { combineReducers } from '@reduxjs/toolkit';
import cardReducer from './features/cardSlice';
import searchReducer from './features/searchSlice';

const rootReducer = combineReducers({
    card: cardReducer,
    search: searchReducer
});

export default rootReducer;