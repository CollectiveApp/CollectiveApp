import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pagesVisitor/Home'
import Projects from './pagesVisitor/Projects'
import ProjectDetails from './pagesVisitor/ProjectDetails'
import Events from './pagesVisitor/Events'
import Volunteer from './pagesVisitor/Volunteer'

function App() {
  return (
    <div className="App"> 
  {/* Routes */}
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/projects' element={<Projects />}/>
    <Route path='/projects/:id' element={<ProjectDetails />}/>
    <Route path='/events' element={<Events />}/>
    <Route path='/volunteer' element={<Volunteer />}/>
  </Routes>
    </div>
  );
}

export default App;
