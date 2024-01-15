import React from 'react';
import { forecast, weatherForecast } from './NextFewDaysForecast.tsx';


const TodayWeather: React.FC<weatherForecast> = ({...value}) => {
  console.log(`прокинули`, value)
  // console.log(`прокинули other`, other)
  return (
    <div style={{margin: '0 26px', textAlign: 'center'}}>
      <h3 style={{ color: '#BFBFD4', fontWeight: 'bold', fontSize: '14px' }}>Сегодня</h3>
      <img style={{ height: '67px', width: '67px' }} src="public/weather/today-weather/cloudy.svg" alt="облачно" />
      <h3 style={{ color: '#BFBFD4', fontWeight: '400', fontSize: '14px' }}>{value.weather[0].description}</h3>
      <div style={{display: 'flex'}}>
        <h4 style={{ color: '#FAFAFA', fontSize: '14px',marginRight: '8px'}}>{value?.main.temp}</h4>
        <h4 style={{ color: '#7F7F98', fontSize: '14px'}}>{value?.main.feels_like}</h4>
      </div>
    </div>
  );
};

export default TodayWeather;