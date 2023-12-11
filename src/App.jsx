import React from 'react';


import GlobalStyles from './styled/GlobalStyles';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from './layout/Header';
import Main from './Pages/Main';

import Calendar from './Pages/calendar/Calendar';
import CalendarDate from './Pages/calendar/CalendarDate';


const App = () => {
  return (
    <HashRouter>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/calendar' element={<Calendar />} />
        <Route path="/calendar/:year/:month/:day" element={<CalendarDate />} />
      </Routes>
    </HashRouter>
  );
};

export default App; 