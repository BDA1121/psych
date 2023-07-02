import './App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Navbar from './subparts/nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './subparts/home';
import TherapistPage from './subparts/therapists';
import PsychiatristsPage from './subparts/psychiatrist';
import AboustUsPage from './subparts/about';
import ChatPage from './subparts/chat';
import VideoConferencePage from './subparts/video';
import SignupPage from './subparts/signup';
import LoginPage from './subparts/login';
import SearchAndSchedulePage from './subparts/search';
import PostsPage from './subparts/forum';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route exact path="/" element={<HomePage/>}/>
        <Route path="/psychiatrists" element={<PsychiatristsPage/>} />
        <Route path="/therapists" element={<TherapistPage/>} />
        <Route path="/aboutus" element={<AboustUsPage/>} />
        <Route path="/chat" element={<ChatPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
        <Route path="/forum" element={<PostsPage/>} />
        <Route path="/schedule" element={<SearchAndSchedulePage/>} />
        {/* <Route path="/chat" element={<VideoConferencePage/>} /> */}
      </Routes>
    </Router>
  );
};

export default App;
