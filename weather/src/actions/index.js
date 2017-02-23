import axios from 'axios';
import { FETCH_WEATHER } from './types';

const API_KEY = 'b37860ab0f8a0f08e675d280005e593a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
   const url = `${ROOT_URL}&q=${city},kr`;
   const request = axios.get(url);

   console.log('Request:', request);

    return {
      type: FETCH_WEATHER,
      payload: request
    };
}
