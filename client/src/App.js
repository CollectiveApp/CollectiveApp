import './App.css';
import './Home.css';
import './EventNavbar.css';
import './ProjectListVisitor.css';
import './login.css';
import './EventsVisitors.css'
import './ProjectDetails.css'
import './Dashboard.css'
import './VolunteerForm.css'
import './EventDetails.css'
import './PopUpProject.css'
import './PopUpEvent.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pagesVisitor/Home'
import Projects from './pagesVisitor/Projects'
import ProjectDetails from './pagesVisitor/ProjectDetails'
import Events from './pagesVisitor/Events'
import Volunteer from './pagesVisitor/Volunteer'
import AdminDashboard from './pagesAdmin/AdminDashboard';
import EditProject from './pagesAdmin/EditProject';
import ProjectVolunteerList from './pagesAdmin/ProjectVolunteerList';
import VolunteersFullList from './pagesAdmin/VolunteersFullList';
import EditEvent from './pagesAdmin/EditEvent';
import Login from './pagesLog/Login'
import Signup from './pagesLog/Signup';
import IsPrivate from './components/IsPrivate';
import EventDetails from './pagesVisitor/EventDetails';




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
    <Route path='/events/:id' element={<EventDetails />}/>
    <Route path='/volunteer' element={<Volunteer />}/>
    <Route path='/volunteer/:id' element={<Volunteer />}/>
  {/* Admin */}
    <Route path='/behind-the-scences' element={<IsPrivate> <AdminDashboard /> </IsPrivate>} />
    <Route path='/behind-the-scences/project/edit/:id' element={<IsPrivate> <EditProject /> </IsPrivate>} />
    <Route path='behind-the-scences/project/volunteer/:id' element={<ProjectVolunteerList />}/>
    <Route path='/behind-the-scences/event/edit/:id' element={<IsPrivate> <EditEvent /> </IsPrivate>} />
    <Route path='/behind-the-scences/volunteers/fullList' element={<VolunteersFullList />} />
  </Routes>
  </div>
  );
}

export default App;
