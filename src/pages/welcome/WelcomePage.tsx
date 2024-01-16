import { Box, TextField, Typography, Autocomplete } from '@mui/material';
import Header from '../../components/header/Header.tsx';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const [cities, setCities] = useState<string>('');
  const navigate = useNavigate();
  return (
    <>
      <Header/>
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
        <Box sx={{ justifyContent: 'center', alignItem: 'center', textAlign: 'center', mt: 30}}>
          <Typography component="span" sx={{fontWeight: 'bold', fontSize: '40px'}}>Добро пожаловать в </Typography>
          <Typography component="span" sx={{color: '#8FB2F5', fontWeight: 'bold', fontSize: '40px'}}>TypeWeather</Typography>
          <Typography component="span" sx={{fontSize: '32px', display: 'block', color: '#BFBFD4'}}>Выберите место для просмотра прогноза погоды</Typography>
        </Box>
        <Autocomplete
          disablePortal
          id="combo-box"
          options={citiesList}
          sx={{ mt: '48px', width: '500px', backgroundColor: '#1E1E29', borderRadius: '16px'}}
          onInputChange={(event, value, reason) => {
            if (reason !== 'reset') {
              console.log(value);
              // onChangeQuery(value);
            }
          }}
          isOptionEqualToValue={(option, value) => option.label === value.label}
          value={cities || null}
          onChange={(event, value) => {
            setCities(value?.label);
            if (value?.label === undefined) {
              navigate(`/`);
            } else {
              navigate(`/${value.label}`);
            }
          }}
          renderInput={(params) => <TextField {...params} label="cities" />}
        />
      </Box>
    </>
  )
}

const citiesList = [
  { label: 'Samara'},
  { label: 'London'},
  { label: 'Moscow'},
  { label: 'Tyumen'},
];
export default WelcomePage;