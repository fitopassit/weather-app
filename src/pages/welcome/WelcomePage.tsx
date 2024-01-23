import { Box, TextField, Typography, IconButton } from '@mui/material';
import Header from '../../components/header/Header.tsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '/src/components/forecastInfo/weather.module.css';
import SearchIcon from '@mui/icons-material/Search';

const WelcomePage = () => {
  const [cities, setCities] = useState<string>('');
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Box
        sx={{
          backgroundImage: `url("/src/assets/Background.png")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'start',
        }}
      >
        <Box sx={{ justifyContent: 'center', alignItem: 'center', textAlign: 'center', mt: 30 }}>
          <Typography component="span" sx={{ fontWeight: 'bold', fontSize: '40px' }}>Добро пожаловать в </Typography>
          <Typography component="span"
                      sx={{ color: '#8FB2F5', fontWeight: 'bold', fontSize: '40px' }}>TypeWeather</Typography>
          <Typography component="span" sx={{ fontSize: '32px', display: 'block', color: '#BFBFD4' }}>Выберите место для
            просмотра прогноза погоды</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <div className={styles.search}>
              <TextField id="search"
                         sx={{
                           width: '450px', label: { color: 'white' }, input: { color: 'white' }, fieldset: {border: 0}
                         }}
                         InputLabelProps={{ shrink: false }}
                         label={cities ? '' : 'Введите название города'}
                         onChange={(e) => {
                           setCities(e.target.value);
                         }}
                         onKeyUp={(e) => {
                           if (e.key === 'Enter') {
                             navigate(`/${cities}`);
                           }
                         }}
              />
              <IconButton sx={{ color: '#8FB2F5' }} aria-label="search picture" component="span"
                          onClick={() => {
                            navigate(`/${cities}`);
                          }}>
                <SearchIcon />
              </IconButton>
            </div>
          </Box>

        </Box>
      </Box>
    </>
  );
};
export default WelcomePage;