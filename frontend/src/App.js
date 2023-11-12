import logo from './logo.svg';
import './App.css';
import AuthContext from './context/AuthContext';
import Login from './pages/Login';

function App() {
  return (
    <>
    <AuthContext/>
    <Login/>
    </>
  );
}

export default App;
