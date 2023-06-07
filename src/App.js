import './App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Navbar from './subparts/nav';
import Car from './subparts/caraousal';
import image1 from './images/psy.jfif';
import image2 from './images/ther.jfif';

const App = () => {
  return (
    <div>
      <Navbar />
      <Car />
      <div className="cards-container">
        <div className="row">
          <div className="card">
            <img src={image1} alt="Card 1" />
            <div className="card-content">
              <h3><a href="/link1">Book Session with Psychiatrist</a></h3>
              
            </div>
          </div>
          <div className="card">
            <img src={image2} alt="Card 2" />
            <div className="card-content">
              <h3><a href="/link2">Book Session with Therapist</a></h3>
              
            </div>
          </div>
        </div>
        <div className="row">
          <div className="card">
            <img src="card3.jpg" alt="Article 1" />
            <div className="card-content">
              <h3>Article heading</h3>
              <a href="/link3">Learn More</a>
            </div>
          </div>
          <div className="card">
            <img src="card4.jpg" alt="Article 2" />
            <div className="card-content">
              <h3>Article heading</h3>
              <a href="/link4">Learn More</a>
            </div>
          </div>
          <div className="card">
            <img src="card5.jpg" alt="Article 3" />
            <div className="card-content">
              <h3>Article heading</h3>
              <a href="/link5">Learn More</a>
            </div>
          </div>
        </div>
      </div>
      {/* Rest of the website content */}
    </div>
  );
};

export default App;
