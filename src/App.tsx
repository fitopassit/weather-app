import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header.tsx';
import WelcomePage from './pages/welcome/WelcomePage.tsx';
import CitiPage from './pages/CitiPage.tsx';
import NextFewDaysForecast from './components/weather/NextFewDaysForecast.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*<Route element={<header />} path={'/*'}/>*/}
          <Route path={'/'} element={<WelcomePage />} />
        <Route path={'/tyumen'} element={<CitiPage/>}></Route>
        <Route path={'/fewday'} element={<NextFewDaysForecast/>}/>
        {/*</Route>*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;