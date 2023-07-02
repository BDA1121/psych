import './App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Navbar from './subparts/nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './subparts/home';
import TherapistPage from './subparts/therapists';
import PsychiatristsPage from './subparts/psychiatrist';
import AboustUsPage from './subparts/about';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route exact path="/" element={<HomePage/>}/>
        <Route path="/psychiatrists" element={<PsychiatristsPage/>} />
        <Route path="/therapists" element={<TherapistPage/>} />
        <Route path="/aboutus" element={<AboustUsPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
