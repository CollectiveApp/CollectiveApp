
import './App.css';
import Login from './pages/login'
import Signup from './pages/signup';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div >
      
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
        
        

      </Routes>
    </div>
  );
}

export default App;
