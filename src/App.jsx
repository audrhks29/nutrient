import React from 'react';


import GlobalStyles from './styled/GlobalStyles';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from './layout/Header';
import Main from './Pages/Main';

import Calendar from './Pages/calendar/Calendar';
import CalendarDate from './Pages/calendar/CalendarDate';
import Edit from './Pages/calendar/Edit';


const App = () => {
  return (
    <HashRouter>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/calendar' element={<Calendar />} />
        <Route path="/calendar/:year/:month/:day" element={<CalendarDate />} />
        <Route path="/calendar/:year/:month/:day/edit" element={<Edit />} />
      </Routes>
    </HashRouter>
  );
};

export default App; 