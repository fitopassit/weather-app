import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header.tsx';
import WelcomePage from './pages/welcome/WelcomePage.tsx';
import CitiPage from './pages/CitiPage.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*<Route element={<header />} path={'/*'}/>*/}
        <Route path={'/'} element={<WelcomePage />} />
        <Route path={'/:cities'} element={<CitiPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;