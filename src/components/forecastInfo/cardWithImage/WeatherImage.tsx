import { format, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';
import React from 'react';

const WeatherImage: React.FC<{ dateCities: string, cities: string }> = ({ dateCities, cities }) => {
  const dateTimeParts = dateCities.split('T');
  const timePart = dateTimeParts[1];
  const timeParts = timePart.split(':');
  const hoursAndMinutes = `${timeParts[0]}:${timeParts[1]}`;

  const date = parseISO(dateTimeParts[0]);
  const dayOfWeek = format(date, 'EEEE', { locale: ru });
  const month = format(date, 'MMMM', { locale: ru });
  const day = format(date, 'd');
  const year = format(date, 'yyyy');
  return (
    <div>
      <div>Прогноз погоды для города: {cities}</div>
      <div> Время в городе: {hoursAndMinutes}</div>
      <div> {dayOfWeek.charAt(0).toUpperCase()}{dayOfWeek.slice(1)}, {day} {month} {year}</div>
    </div>
  );
};

export default WeatherImage;