import { Box, Typography } from '@mui/material';
import DayWeather from './DayWeather.tsx';
import { ForecastDictionary, WeatherForecast } from '../types.ts';
import * as _ from 'lodash';
import React from 'react';
//https://api.openweathermap.org/data/2.5/forecast?q=Samara&units=metric&appid=644ada49c4ba82c5ab4a6ab922c7104b


const NextFewDaysForecast: React.FC<{arrayWithForecast: WeatherForecast[]}> = ({arrayWithForecast}) => {
  const forecastWithDate: WeatherForecast[] = arrayWithForecast.map((hourlyForecast: WeatherForecast) => {
    const date = hourlyForecast.dt_txt.split(' ');
    hourlyForecast['dt_txt'] = date[0];
    return hourlyForecast;
  });

  const groupForecast: ForecastDictionary<WeatherForecast[]> = _.groupBy(forecastWithDate, ({ dt_txt }) => dt_txt);
  const firstElementsGroupForecast = Object.values(groupForecast).map(arr => arr[0]);

  return (
    <>
      <Box sx={{ backgroundColor: '#16161F', borderRadius: '12px', mt: '16px' }}>
        <Typography sx={{ color: '#7F7F98', textSize: '20px', textAlign: 'left', pt: '28px', pl: '24px', pr: '24px'}}>Прогноз
          погоды на ближайшие 6 дней</Typography>
        <Box sx={{ display: 'flex', ["@media screen and (max-width: 810px)"]: { overflowX: 'scroll'} }}>
          {firstElementsGroupForecast.map(weather => {
            return <DayWeather key={weather.dt} {...weather} />;
          })}
        </Box>
      </Box>
    </>
  )
    ;
};

export default NextFewDaysForecast;