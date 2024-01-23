import React from 'react';
import { WeatherForecast } from '../types.ts';
import { format, parse, isEqual } from 'date-fns';
import { ru } from 'date-fns/locale';
import styles from '/src/components/forecastInfo/weather.module.css';

const DayWeather: React.FC<WeatherForecast> = ({ ...forecast }) => {
  const forecastDay = forecast.dt_txt;
  const date = parse(forecastDay, 'yyyy-MM-dd', new Date());
  const dayOfWeek = format(date, 'EEEE', { locale: ru });
  const currentDate = format(new Date(), 'yyyy-MM-dd');
  const iconName = forecast.weather[0].icon.match(/\d+/)[0];
  return (
    <div className={styles.card}>
      <h3 className={styles.card__weakDay}>{isEqual(forecastDay, currentDate) ? 'Сегодня' : `${dayOfWeek}`}</h3>
      <img className={styles.card__img} src={`/src/assets/weather/today-weather/${iconName}.svg`} alt="Иконка погоды" />
      <h3 className={styles.card__description}>{forecast.weather[0].description}</h3>
      <div className={styles.today__temperature}>
        <span className={styles.card__temperature}>{Math.floor(forecast?.main.temp)}</span>
        <span className={styles.card__feelsTemperature}>{Math.floor(forecast?.main.feels_like)}</span>
      </div>
    </div>
  );
};

export default DayWeather;