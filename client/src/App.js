import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pagesVisitor/Home'
import Projects from './pagesVisitor/Projects'
import ProjectDetails from './pagesVisitor/ProjectDetails'
import Events from './pagesVisitor/Events'
import Volunteer from './pagesVisitor/Volunteer'
import AdminDashboard from './pagesAdmin/AdminDashboard';
import EditProject from './pagesAdmin/EditProject';
import EditEvent from './pagesAdmin/EditEvent';
import Login from './pagesLog/login'
import Signup from './pagesLog/signup';


function App() {
  return (
  <div className="App"> 
  <Routes>
  {/* Authorization  */}
    <Route path='/login' element={<Login />}/>
    <Route path='/signup' element={<Signup />}/>
  {/* Visitor */}
    <Route path='/' element={<Home />}/>
    <Route path='/projects' element={<Projects />}/>
    <Route path='/projects/:id' element={<ProjectDetails />}/>
    <Route path='/events' element={<Events />}/>
    <Route path='/volunteer' element={<Volunteer />}/>
  {/* Admin */}
    <Route path='/behind-the-scences' element={<AdminDashboard />} />
    <Route path='/behind-the-scences/project/edit/:id' element={<EditProject />} />
    <Route path='/behind-the-scences/event/edit/:id' element={<EditEvent />} />
  </Routes>
  </div>
  );
}

export default App;
