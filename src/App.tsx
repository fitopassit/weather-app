import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import WelcomePage from './pages/welcome/WelcomePage.tsx';
import CityPage from './pages/city/CityPage.tsx';
import ErrorPage from './pages/error/ErrorPage.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<WelcomePage />} />
        <Route path={'/:cities'} element={<CityPage />}/>
        <Route path="*" element={<Navigate to="/error/404" />} />
        <Route path="/error/404" element={<ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;