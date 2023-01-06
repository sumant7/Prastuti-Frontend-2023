import Sponsor from "./components/Sponser/Sponsor";
import Register from "./components/Register";
import Teams from "./components/Teams";
import Faq from '././components/Faq'
import About from './components/About'
import Separate_Event from './components/Separate_Event';
import eventData from './components/Eventdata';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import PrastutiTeam from "./components/Team/Teams"
import Intro from "./components/Intro";

export default function App() {
  return (
    <>
      <Router>
        <div className="sticky top-0 z-20">
          <Navbar />
        </div>
        <Routes>
          <Route path='/' element={<Intro />}></Route>
          <Route path='/teams' element={<Teams />}></Route>
          <Route path='/faq' element={<Faq />}></Route>
          <Route path='/sponsors' element={<Sponsor />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path='/codigo' element={<Separate_Event data={eventData.codigo} />}></Route>
          <Route path='/hackoverflow' element={<Separate_Event data={eventData.hackoverflow} />}></Route>
          <Route path='/recognizance' element={<Separate_Event data={eventData.recognizance} />}></Route>
          <Route path='/simulim' element={<Separate_Event data={eventData.simulim} />}></Route>
          <Route path='/consilium' element={<Separate_Event data={eventData.consilium} />}></Route>
          <Route path='/oscillion' element={<Separate_Event data={eventData.oscillion} />}></Route>
          <Route path='/login' element={<Register />}></Route>
          <Route path='/team' element={<PrastutiTeam />}></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}