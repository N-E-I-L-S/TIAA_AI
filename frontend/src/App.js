import './App.css';
import Login from './pages/Login';
import {Routes, Route} from 'react-router-dom'
import Landing from './pages/Landing';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
      </>
  );
}

export default App;
