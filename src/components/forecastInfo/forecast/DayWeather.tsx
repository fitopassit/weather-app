import React from 'react';
import { WeatherForecast } from '../types.ts';
import {format, parse, isEqual } from 'date-fns';
import { ru } from 'date-fns/locale';
import styled from '/src/components/forecastInfo/weather.module.css'

const DayWeather: React.FC<WeatherForecast> = ({...forecast}) => {
  const forecastDay = forecast.dt_txt;
  const date = parse(forecastDay, 'yyyy-MM-dd', new Date());
  const dayOfWeek = format(date, 'EEEE', { locale: ru });
  const currentDate = format(new Date(), 'yyyy-MM-dd');

  return (
    <div className={styled.card}>
      <h3 className={styled.card_weakDay}>{isEqual(forecastDay, currentDate) ? 'Сегодня': `${dayOfWeek.charAt(0).toUpperCase()}${dayOfWeek.slice(1)}`}</h3>
      <img className={styled.card_img} src="/weather/today-weather/cloudy.svg" alt="облачно" />
      <h3 className={styled.card_description}>{forecast.weather[0].description}</h3>
      <div style={{display: 'flex'}}>
        <h4 className={styled.card_temperature}>{forecast?.main.temp}</h4>
        <h4 className={styled.card_feelsTemperature}>{forecast?.main.feels_like}</h4>
      </div>
    </div>
  );
};

export default DayWeather;