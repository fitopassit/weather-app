import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.tsx';
import WelcomePage from './pages/welcome/WelcomePage.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*<Route element={<Header />} path={'/*'}>*/}
          <Route path={'/'} element={<WelcomePage />} />
        {/*</Route>*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;