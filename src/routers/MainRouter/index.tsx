import { BrowserRouter, Route, Routes, useLocation } from 'react-router';
import { LearnPomodoro } from '../../pages/LearnPomodoro';
import { NotFound } from '../../pages/NotFound';
import { Home } from '../../pages/Home';
import { useEffect } from 'react';
import { History } from '../../pages/History';

function ScrollPageToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return null;
}

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/learn-pomodoro' element={<LearnPomodoro />} />
        <Route path='/history' element={<History />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <ScrollPageToTop />
    </BrowserRouter>
  );
}
