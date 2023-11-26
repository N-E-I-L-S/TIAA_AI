import './App.css';
import Login from './pages/Login';
import {Routes, Route} from 'react-router-dom'
import Landing from './pages/Landing';
import AssetAllocation from './pages/AssetAllocation';
import MainDashboard from './dashboard/MainDashboard';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/assetmanager' element={<AssetAllocation/>}/>
      <Route path='/dashboard' element={<MainDashboard/>}/>
    </Routes>
      </>
  );
}

export default App;
