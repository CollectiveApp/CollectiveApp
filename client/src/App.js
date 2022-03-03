import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pagesVisitor/Home'
import Projects from './pagesVisitor/Projects'
import ProjectDetails from './pagesVisitor/ProjectDetails'
import Events from './pagesVisitor/Events'
import Volunteer from './pagesVisitor/Volunteer'
import AdminDashboard from './pagesAdmin/AdminDashboard';
import CreateProject from './pagesAdmin/CreateProject';
import EditProject from './pagesAdmin/EditProject';
import DeleteProject from './pagesAdmin/DeleteProject';
import CreateEvent from './pagesAdmin/CreateEvent';
import EditEvent from './pagesAdmin/EditEvent';
import DeleteEvent from './pagesAdmin/DeleteEvent';


function App() {
  return (
    <div className="App"> 
  {/* Routes */}
  <Routes>
  {/* Visitor */}
    <Route path='/' element={<Home />}/>
    <Route path='/projects' element={<Projects />}/>
    <Route path='/projects/:id' element={<ProjectDetails />}/>
    <Route path='/events' element={<Events />}/>
    <Route path='/volunteer' element={<Volunteer />}/>
  {/* Admin */}
    <Route path='/behind-the-scences' element={<AdminDashboard />} />
    <Route path='/behind-the-scences/project/create' element={<CreateProject />} />
    <Route path='/behind-the-scences/project/edit/:id' element={<EditProject />} />
    <Route path='/behind-the-scences/project/delete/:id' element={<DeleteProject />} />
    <Route path='/behind-the-scences/event/create' element={<CreateEvent />} />
    <Route path='/behind-the-scences/event/edit/:id' element={<EditEvent />} />
    <Route path='/behind-the-scences/event/delete/:id' element={<DeleteEvent />} />
  </Routes>
    </div>
  );
}

export default App;
