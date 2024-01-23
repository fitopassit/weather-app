import { useEffect, useState } from 'react';
import DetailedForecast from '../../components/forecastInfo/forecast/DetailedForecast.tsx';
import NextFewDaysForecast from '../../components/forecastInfo/forecast/NextFewDaysForecast.tsx';
import { Forecast } from '../../components/forecastInfo/types.ts';
import { CircularProgress } from '@mui/material';
import CardWithImage from '../../components/forecastInfo/cardWithImage/CardWithImage.tsx';
import { useNavigate, useParams } from 'react-router-dom';
import styles from '/src/pages/city/index.module.css';
import apiKey from '../../apiKey.tsx';
const CityPage = () => {
  const [forecast, setForecast] = useState<Forecast['list']>([]);
  const [city, setCity] = useState<Forecast['city']>();
  const [loading, setLoading] = useState(true);
  const { cities } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchForecast = async () => {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cities}&units=metric&appid=${apiKey}`;
      setLoading(true);
      try {
        const response: Response = await fetch(url);
        if (response.status === 404) {
          navigate('/error/404');
        }
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
  }, [cities]);
  return (
    <>
      {loading ? <CircularProgress size={20} /> :
        (
          <div className={styles.container}>
            <CardWithImage arrayWithForecast={forecast} city={city} />
            <div className={styles.forecast}>
              <DetailedForecast arrayWithForecast={forecast} />
              <NextFewDaysForecast arrayWithForecast={forecast} />
            </div>

          </div>
        )}
    </>
  );
};

export default CityPage;