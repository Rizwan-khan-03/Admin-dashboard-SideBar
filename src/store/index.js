// import { applyMiddleware, createStore } from "redux";
import { applyMiddleware ,configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk";

// const store = configureStore(reducers, applyMiddleware(thunk));

// export default store;

// import counterReducer from '../features/counter/counterSlice';
import counterReducer from './slices/slice1'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
},applyMiddleware(thunk));
