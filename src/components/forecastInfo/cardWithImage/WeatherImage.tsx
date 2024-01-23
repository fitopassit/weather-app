import { format, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';
import React from 'react';
import { Box } from '@mui/material';
import styles from '/src/components/forecastInfo/cardWithImage/index.module.css';
import { WeatherForecast } from '../types.ts';

const WeatherImage: React.FC<{ arrayWithForecast: WeatherForecast[], dateCities: string, cities: string }> = ({arrayWithForecast, dateCities, cities }) => {
  const dateTimeParts = dateCities.split('T');
  const timePart = dateTimeParts[1];
  const timeParts = timePart.split(':');
  const hoursAndMinutes = `${timeParts[0]}:${timeParts[1]}`;

  const date = parseISO(dateTimeParts[0]);
  const dayOfWeek = format(date, 'EEEE', { locale: ru });
  const month = format(date, 'MMMM', { locale: ru });
  const day = format(date, 'd');
  const year = format(date, 'yyyy');

  const TodayForecast: WeatherForecast = arrayWithForecast[0];
  const iconName = TodayForecast.weather[0].icon.match(/\d+/)[0];
  return (
    <Box
      sx={{
        backgroundImage: `url("/src/assets/weather/background/${TodayForecast.weather[0].icon}.png")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        m: '16px',
        width: '632px',
        height: '618px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        ['@media screen and (max-width: 810px)']: { width: '335px', height: '304px'}
      }}
    >
      <div className={styles.image__info}>
        <div className={styles.image__title}>
          <span className={styles.image__title_uppercase}>{cities}</span>
          <span>{hoursAndMinutes}</span>
        </div>
        <div className={styles.image__description}>
          <span className={styles.image__title_uppercase}> {dayOfWeek}, {day} {month} {year}</span>
        </div>
      </div>

      <div className={styles.card__forecastBox}>
        <div className={styles.card__textblock}>
          <span className={styles.card__forecastBox_title}>{Math.round(TodayForecast.main.temp)} ºc</span>
          <span className={styles.card__forecastBox_text}>{TodayForecast.weather[0].description}</span>
        </div>
        <img className={styles.detailed_image} src={`/src/assets/weather/today-weather/${iconName}.svg`} alt="Погода" />
      </div>
    </Box>

  );
};

export default WeatherImage;