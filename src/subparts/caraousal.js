import { Carousel } from 'react-responsive-carousel';
import image1 from './../images/carousal1.jpg';
const Car = () => {
    return (
        <div className="carousel-container">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
        >
          <div>
            <img src={image1} alt="Image 1" />
            <p className="legend"></p>
          </div>
          <div>
            <img src={image1} alt="Image 2" />
            <p className="legend">Image 2</p>
          </div>
          <div>
            <img src={image1} alt="Image 3" />
            <p className="legend">Image 3</p>
          </div>
        </Carousel>
      </div>
    );
  };

  export default Car;