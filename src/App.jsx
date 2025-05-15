import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import DefaultLayout from './layouts/DefaultLayout';
import SingleMovie from './pages/SingleMovie';
import GlobalContext from './contexts/GlobalContext';
import { useState } from 'react';

function App() {

  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <GlobalContext.Provider value={{ isLoading, setIsLoading }}>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path='/' element={<Home />} />
              <Route path='/movies/:id' element={<SingleMovie />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  );
}

export default App;
