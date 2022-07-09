import React from 'react';

//* components
import { Route, Routes } from 'react-router-dom';
import MainLayout from '#/layouts/Main.layout';

//* custom hook
import ThemeProvider from '#/contexts/theme';

//* pages
import Home from './home';

// App setup
//* ------------------------------------------------------------------------------------------ *//
const App = () => {
  return (
    <ThemeProvider>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MainLayout>
    </ThemeProvider>
  );
};

export default App;
