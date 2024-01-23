import { TextField, IconButton, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from '/src/components/forecastInfo/cardWithImage/index.module.css'

const InputCity = () => {
  const [city, setCity] = useState<string>('');
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.searchBar}>
        <div className={styles.btn}>
          <Link to={'/'} style={{ color: '#FAFAFA' }}>
            <img className={styles.btn_svg} src="src/assets/Logo.svg" alt="Лого" />
          </Link>
        </div>
        <div className={styles.search}>
          <TextField id="search"
                     sx={{ width: '450px', fieldset: {border: 0}, label: { color: 'white' }, input: { color: 'white' } }}
                     InputLabelProps={{ shrink: false }}
                     label={city ? '' : 'Введите название города'}
                     onChange={(e) => {
                       setCity(e.target.value);
                     }}
                     onKeyUp={(e) => {
                       if (e.key === 'Enter') {
                         navigate(`/${city}`);
                       }
                     }}
          />

          <IconButton sx={{ color: '#8FB2F5' }} aria-label="search picture" component="span"
                      onClick={() => {
                        navigate(`/${city}`);
                      }}>
            <SearchIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
};
export default InputCity;