import React, { useEffect, useState } from 'react';
import { Box, Divider, List, ListItem, ListItemText, SvgIcon, Typography } from '@mui/material';
import TodayWeather from './TodayWeather.tsx';
//https://api.openweathermap.org/data/2.5/forecast?q=Samara&units=metric&appid=644ada49c4ba82c5ab4a6ab922c7104b
export type weatherForecast = {
  dt: number,
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    sea_level: number,
    grnd_level: number,
    humidity: number,
    temp_kf: number
  },
  weather: [
    {
      id: number,
      main: string,
      description: string,
      icon: string
    }
  ],
  clouds: {
    all: number,
  }
  wind: {
    speed: number,
    deg: number,
    gust: number,
  }
  visibility: number,
  sys: {
    pod: string
  },
  dt_txt: string
}

export type city = {
  id: number,
  name: string,
  coord: {
    lat: number,
    lon: number
  },
  county: string,
  population: number,
  timezone: number,
  sunrise: number,
  sunset: number
}

export type forecast = {
  cod: string,
  message: number,
  cnt: number,
  list: weatherForecast,
  city: city
}

const NextFewDaysForecast = () => {
  const [forecast, setForecast] = useState<forecast>({});
  const [loading, setLoading] = useState(true);


  const currentDate = new Date();
  const day = currentDate.getDay();
  const dayNames = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  const n = dayNames.length;
  console.log('1', dayNames[(day % n + n) % n]);
  console.log('2', dayNames[(day + 1 % n + n) % n]);
  console.log('3', dayNames[(day + 2 % n + n) % n]);
  console.log('4', dayNames[(day + 3 % n + n) % n]);
  console.log('5', dayNames[(day + 4 % n + n) % n]);


  useEffect(() => {
    //https://api.openweathermap.org/data/2.5/forecast?q=Samara&units=metric&appid=644ada49c4ba82c5ab4a6ab922c7104b
    const fetchForecast = async () => {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=Samara&units=metric&appid=644ada49c4ba82c5ab4a6ab922c7104b`;
      try {
        const forecastList: forecast = await fetch(url).then(response => response.json());
        setForecast(forecastList);
      } catch (err) {
        alert('Ошибка в запросе для получения прогноза погоды: ' + err);
      } finally {
        setLoading(false);
      }
    };

    fetchForecast();

    setLoading(true);
  }, []);
  return (
    <>
      <Box sx={{ backgroundColor: '#16161F', borderRadius: '12px' }}>
        <Typography sx={{ color: '#7F7F98', textSize: '20px', textAlign: 'left', pt: '28px', pl: '24px', pr: '24px' }}>Прогноз
          погоды на ближайшие 5 дней</Typography>
        <Box sx={{ display: 'flex' }}>

          {/*{*/}
          {/*  test?.map(forecast => {*/}
          {/*   return <TodayWeather key={forecast.dt_txt} forecast={forecast} />;*/}
          {/* })*/}
          {/*}*/}
1
          {
            ([forecast.list][0]?.slice(0,5) as any)?.map(fore => {
              return <TodayWeather key={fore.dt_txt} {...fore}/>
          })
          }
          {/*<TodayWeather {...forecast.list} />*/}
          {/*<TodayWeather {...forecast.list} />*/}
          {/*<TodayWeather {...forecast.list} />*/}
          {/*<TodayWeather {...forecast.list} />*/}
          {/*<TodayWeather {...forecast.list} />*/}
        </Box>
      </Box>
    </>
  );
};

export default NextFewDaysForecast;