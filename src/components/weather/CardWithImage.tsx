import React, { useEffect, useState } from 'react';
import { City, Time, WeatherForecast } from './types.ts';
import { useParams } from 'react-router-dom';
import { format, fromUnixTime, parseISO } from 'date-fns';
import { Box, CircularProgress } from '@mui/material';
import { ru } from 'date-fns/locale'
const CardWithImage: React.FC<{arrayWithForecast: WeatherForecast[], city: City}> = ({ arrayWithForecast, city}) => {
  const { cities } = useParams();
  const [utcTime, setUtcTime] = useState<Time['unixtime']>(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchUtcTime = async () => {
      const url = 'http://worldtimeapi.org/api/timezone/Europe/London';
      setLoading(true);
      try {
        const response: Response = await fetch(url);
        const utcTime: Time = await response.json();
        setUtcTime(utcTime.unixtime);
      } catch (err) {
        alert('Ошибка в запросе для получения серверного UTC времени: ' + err);
      } finally {
        setLoading(false);
      }
    };
    void fetchUtcTime();
  }, [])
  const dateCities = fromUnixTime(utcTime + city.timezone).toISOString()
  const dateTimeParts = dateCities.split('T')
  const timePart = dateTimeParts[1]
  const timeParts = timePart.split(':')
  const hoursAndMinutes = `${timeParts[0]}:${timeParts[1]}`

  const date = parseISO(dateTimeParts[0])
  const dayOfWeek = format(date, 'EEEE', { locale: ru })
  const month = format(date, 'MMMM', { locale: ru })
  const day = format(date, 'd')
  const year = format(date, 'yyyy')

  return (
    loading ? <CircularProgress size={20} /> :
      <>
        {/*<div>*/}
        {/*  Прогноз погоды для города: {cities}</div>*/}
        {/*<div> Время в городе: {hoursAndMinutes}</div>*/}
        {/*<div> {dayOfWeek.charAt(0).toUpperCase()}{dayOfWeek.slice(1)}, {day} {month} {year}</div>*/}
        <Box>

        </Box>
      </>
  );
};

export default CardWithImage;