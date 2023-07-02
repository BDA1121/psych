import { Carousel } from 'react-responsive-carousel';
import imageCar1 from './../images/carousal1.jpg';
import image1 from './../images/psy.jfif';
import './styles/carousal.css';
import image2 from './../images/ther.jfif';
const HomePage = () => {
    return (
      <div>
        <div className="carousel-container">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
        >
          <div>
            <img src={imageCar1} alt="Image 1" />
            <p className="legend"></p>
          </div>
          <div>
            <img src={imageCar1} alt="Image 2" />
            <p className="legend">Image 2</p>
          </div>
          <div>
            <img src={imageCar1} alt="Image 3" />
            <p className="legend">Image 3</p>
          </div>
        </Carousel>
      </div>
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
    </div>
    );
  };

  export default HomePage;