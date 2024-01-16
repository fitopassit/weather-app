import { useEffect, useState } from 'react';
import DetailedForecast from '../../components/forecastInfo/forecast/DetailedForecast.tsx';
import NextFewDaysForecast from '../../components/forecastInfo/forecast/NextFewDaysForecast.tsx';
import { Forecast } from '../../components/forecastInfo/types.ts';
import { CircularProgress } from '@mui/material';
import CardWithImage from '../../components/forecastInfo/cardWithImage/CardWithImage.tsx';
import { useParams } from 'react-router-dom';

const CityPage = () => {
  const [forecast, setForecast] = useState<Forecast['list']>([]);
  const [city, setCity] = useState<Forecast['city']>()
  const [loading, setLoading] = useState(true);
  const { cities } = useParams();
  // console.log(`прогноз погоды для города ${cities}`)
  useEffect(() => {
    //https://api.openweathermap.org/data/2.5/forecast?q=Samara&units=metric&appid=644ada49c4ba82c5ab4a6ab922c7104b
    const fetchForecast = async () => {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cities}&units=metric&appid=644ada49c4ba82c5ab4a6ab922c7104b`;
      setLoading(true);
      try {
        const response: Response = await fetch(url);
        const forecastList: Forecast = await response.json();
        setForecast(forecastList.list);
        setCity(forecastList.city);
      } catch (err) {
        alert('Ошибка в запросе для получения прогноза погоды: ' + err);
      } finally {
        setLoading(false);
      }
    };

    void fetchForecast();
  }, []);
  console.log('data', loading)
  return (
    <>
      {loading ? <CircularProgress size={20} /> :
       (
        <div style={{ backgroundColor: '$13131A' }}>
          <CardWithImage arrayWithForecast={forecast} city={city} />
          <DetailedForecast arrayWithForecast={forecast} />
          <NextFewDaysForecast arrayWithForecast={forecast} />
        </div>
      )}
    </>
  );
};

export default CityPage;