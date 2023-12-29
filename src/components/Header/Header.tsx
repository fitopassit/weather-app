import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { SvgIcon } from '@mui/material';
import { Outlet, Link } from 'react-router-dom';

export const Header = () => {
  return (
 <AppBar position="absolute" sx={{mt: '56px', fontSize: '24px', textShadow: '1px 1px 2px black', backgroundColor: 'rgba(0,0,0,0)', fontSize: '40px', boxShadow: '0'}}>
   <Toolbar sx={{justifyContent: 'center'}}>
     <Link to={'/'} style={{color: '#FAFAFA'}}>
     <SvgIcon>
       <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         width="37" height="24"
         viewBox="0 0 37 24"
         strokeWidth={1.5}
         stroke="currentColor">
         <path
           d="M27.5002 24C26.2006 24 25.4 23.4 24.0918 22.6934C22.7836 21.9867 19 19.1416 19 15.6C19 13.1975 18.3806 11.2543 17.3259 9.70568C16.2791 8.16896 14.8609 7.10428 13.3855 6.35272C12.6746 5.99064 11.9347 5.69452 11.198 5.4498C10.7685 5.30724 10.5193 4.84608 10.7056 4.4338C11.8867 1.81916 14.517 0 17.5724 0C21.7316 0 25.1035 3.37168 25.1035 7.53104C25.1035 8.42088 24.9492 9.2748 24.6658 10.0672C25.8662 9.2582 27.3126 8.78612 28.869 8.78612C33.0282 8.78612 36.3998 12.1578 36.3998 16.3172C36.3998 21.3244 31.9998 24 27.5002 24Z"
           fill="#8FB2F5" />
         <path
           d="M0 15.6896C0 19.6593 2.6172 22.967 6.08436 23.6978C6.61952 23.8933 7.19728 24 7.8 24H19.501C19.8934 24 20.0642 23.4752 19.7646 23.2217C17.7197 21.4914 16.2 19.0529 16.2 15.6C16.2 13.7027 15.7195 12.3209 15.0117 11.282C14.2959 10.2312 13.2891 9.44586 12.1146 8.84746C10.9293 8.24374 9.6424 7.85914 8.41348 7.5865C8.12404 7.54998 7.82948 7.53102 7.53104 7.53102C3.37168 7.53102 0 11.1838 0 15.6896Z"
           fill="#8FB2F5" />
       </svg>
     </SvgIcon>
     TypeWeather
     </Link>
     <Outlet />
   </Toolbar>
 </AppBar>
  );
};
export default Header;