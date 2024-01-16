import React, { useEffect, useState } from 'react';
import { City, Time, WeatherForecast } from '../types.ts';
import { useParams } from 'react-router-dom';
import { fromUnixTime } from 'date-fns';
import { Box, CircularProgress } from '@mui/material';
import LogoButton from './LogoButton.tsx';
import InputCity from './InputCity.tsx';
import WeatherImage from './WeatherImage.tsx';

const CardWithImage: React.FC<{ arrayWithForecast: WeatherForecast[], city: City }> = ({ arrayWithForecast, city }) => {
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
  }, []);
  const dateCities = fromUnixTime(utcTime + city.timezone).toISOString();


  return (
    loading ? <CircularProgress size={20} /> :
      <>
        <Box>
          <div>
            <LogoButton />
            <InputCity />
            <WeatherImage dateCities={dateCities} cities={cities} />
          </div>
        </Box>
      </>
  );
};

export default CardWithImage;