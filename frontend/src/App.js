import './App.css';
import Login from './pages/Login';
import {Routes, Route} from 'react-router-dom'
import Landing from './pages/Landing';
import AssetAllocation from './pages/AssetAllocation';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/assetmanager' element={<AssetAllocation/>}/>
    </Routes>
      </>
  );
}

export default App;
