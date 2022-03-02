
import './App.css';
import Login from './pages/login'
import Signup from './pages/signup';



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
