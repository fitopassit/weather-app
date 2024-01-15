import React from 'react';
import { WeatherForecast } from './types.ts';
import {format, parse, isEqual } from 'date-fns';
import { ru } from 'date-fns/locale';

const TodayWeather: React.FC<WeatherForecast> = ({...forecast}) => {
  const forecastDay = forecast.dt_txt;
  let date = parse(forecastDay, 'yyyy-MM-dd', new Date());
  let dayOfWeek = format(date, 'EEEE', { locale: ru });
  let currentDate = format(new Date(), 'yyyy-MM-dd');

  return (
    <div style={{margin: '0 26px', textAlign: 'center'}}>
      <h3 style={{ color: '#BFBFD4', fontWeight: 'bold', fontSize: '14px' }}>{isEqual(forecastDay, currentDate) ? 'Сегодня': `${dayOfWeek.charAt(0).toUpperCase()}${dayOfWeek.slice(1)}`}</h3>
      <img style={{ height: '67px', width: '67px' }} src="public/weather/today-weather/cloudy.svg" alt="облачно" />
      <h3 style={{ color: '#BFBFD4', fontWeight: '400', fontSize: '14px' }}>{forecast.weather[0].description}</h3>
      <div style={{display: 'flex'}}>
        <h4 style={{ color: '#FAFAFA', fontSize: '14px',marginRight: '8px'}}>{forecast?.main.temp}</h4>
        <h4 style={{ color: '#7F7F98', fontSize: '14px'}}>{forecast?.main.feels_like}</h4>
      </div>
    </div>
  );
};

export default TodayWeather;