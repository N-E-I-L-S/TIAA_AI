import { ColorModeContext, useMode } from './themes';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './dashboard_components/Topbar';
import Sidebar from './dashboard_components/Sidebar';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Bar from './pages/BarPage';
import Piepage from './pages/PiePage';
import LinePage from './pages/LinePage';
import Calendar from './pages/Calender';
import Form from './pages/FormPage';
import FAQ from './pages/Faq';

function MainDashboard() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
   <>
   <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div className='app flex'>
      <Sidebar isSidebar={isSidebar} />
      <main className='content'>
      <Topbar setIsSidebar={setIsSidebar} />
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/bar' element={<Bar/>}/>
        <Route path='/pie' element={<Piepage/>}/>
        <Route path='/line' element={<LinePage/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/faq' element={<FAQ/>}/>
        <Route path='/calendar' element={<Calendar/>}/>
      </Routes>
      </main>
      </div>
    </ThemeProvider>
   </ColorModeContext.Provider>
   </>
  );
}

export default MainDashboard;
