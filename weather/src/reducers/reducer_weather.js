import {
  FETCH_WEATHER
  } from '../actions/types';

export default function (state = [], action) {
  console.log('Action received', action);

  switch (action.type) {
    case FETCH_WEATHER:
//      return state.concat([action.payload.data]);
//      return [action.payload.data, ...state]; // [city, city, city ] Not [city , [city, city] ]
      return [...state, action.payload.data];
    default:
      return state;
  }
}
