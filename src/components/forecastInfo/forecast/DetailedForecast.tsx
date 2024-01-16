import { Box, Divider, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { WeatherForecast } from '../types.ts';
import styled from '/src/components/forecastInfo/weather.module.css'

const DetailedForecast: React.FC<{arrayWithForecast: WeatherForecast[]}> = ({ arrayWithForecast }) => {
  const detailedForecast: WeatherForecast = arrayWithForecast[0];
  console.log(detailedForecast)
  return (
    <Box sx={{ backgroundColor: '#16161F', borderRadius: '12px' }}>
      <Typography sx={{ color: '#7F7F98', textSize: '20px', textAlign: 'left', pt: '28px', pl: '24px', pr: '24px' }}>Подробная
        информация о погоде сегодня</Typography>
      <List sx={{ width: '100%', maxWidth: 360 }}>
        <ListItem>
            <img className={styled.detailed_image} src="/weather/detailed/thermometer.svg" alt="Термометр" />
          <Divider />
          <ListItemText sx={{ color: '#BFBFD4' }} primary="Температура" />
          <Typography sx={{ color: '#FAFAFA', fontWeight: 'bold' }}
                      variant="body1">{detailedForecast.main.temp} ºc</Typography>
        </ListItem>
        <ListItem>
          <img className={styled.detailed_image} src="/weather/detailed/thermometer.svg" alt="Термометр" />
          <ListItemText sx={{ color: '#BFBFD4' }} primary="Тепература ощущается как" />
          <Typography sx={{ color: '#FAFAFA', fontWeight: 'bold' }}
                      variant="body1">{detailedForecast.main.feels_like} ºc</Typography>
        </ListItem>
        <Divider />
        <ListItem>
          <img className={styled.detailed_image} src="/weather/detailed/wind.svg" alt="Ветер" />
          <ListItemText sx={{ color: '#BFBFD4' }} primary="Сила ветра" />
          <Typography sx={{ color: '#FAFAFA', fontWeight: 'bold' }}
                      variant="body1">{detailedForecast.wind.speed} km/h</Typography>
        </ListItem>
        <Divider />
        <ListItem>
          <img className={styled.detailed_image} src="/weather/detailed/drop.svg" alt="Влажность" />
          <ListItemText sx={{ color: '#BFBFD4' }} primary="Влажность" />
          <Typography sx={{ color: '#FAFAFA', fontWeight: 'bold' }}
                      variant="body1">{detailedForecast.main.humidity}%</Typography>
        </ListItem>
        <Divider />
        <ListItem>
          <img className={styled.detailed_image} src="/weather/detailed/sun.svg" alt="Видимость" />
          <ListItemText sx={{ color: '#BFBFD4' }} primary="Видимость" />
          <Typography sx={{ color: '#FAFAFA', fontWeight: 'bold' }}
                      variant="body1">{detailedForecast.visibility} m</Typography>
        </ListItem>
      </List>
    </Box>
  );
};

export default DetailedForecast;