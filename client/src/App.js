import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pagesVisitor/Home'
import Projects from './pagesVisitor/Projects'
import ProjectDetails from './pagesVisitor/ProjectDetails'
import Events from './pagesVisitor/Events'
import Volunteer from './pagesVisitor/Volunteer'
import AdminDashboard from './pagesAdmin/AdminDashboard';
import EditProject from './pagesAdmin/EditProject';
import DeleteProject from './pagesAdmin/DeleteProject';
import EditEvent from './pagesAdmin/EditEvent';
import DeleteEvent from './pagesAdmin/DeleteEvent';
import Login from './pages/login'
import Signup from './pages/signup';


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
    <Route path='/behind-the-scences/project/delete/:id' element={<DeleteProject />} />
    <Route path='/behind-the-scences/event/edit/:id' element={<EditEvent />} />
    <Route path='/behind-the-scences/event/delete/:id' element={<DeleteEvent />} />
  </Routes>
  </div>
  );
}

export default App;
