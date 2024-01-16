import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Outlet, Link } from 'react-router-dom';

export const Header = () => {
  return (
    <AppBar position="absolute" sx={{mt: '56px', fontSize: '24px', textShadow: '1px 1px 2px black', backgroundColor: 'rgba(0,0,0,0)', boxShadow: '0'}}>
      <Toolbar sx={{justifyContent: 'center'}}>
        <Link to={'/'} style={{ color: '#FAFAFA' }}>
          <img src="src/assets/Logo.svg" alt="Лого" />
          TypeWeather
        </Link>
        <Outlet />
      </Toolbar>
    </AppBar>
  );
};
export default Header;