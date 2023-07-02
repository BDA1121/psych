import React, { useState } from 'react';
import image1 from './../images/psy.jfif';

const PsychiatristsPage = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
      setIsFlipped(!isFlipped);
    };
    return (
        <div className="container-page">
        <div className={`container ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
          <div className="container-content">
            <div className="container-text">
              <h3>Our Psychiatrists</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="container-image">
              <img src={image1} alt="Container 1" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="container-content">
            <div className="container-image">
              <img src={image1} alt="Container 2" />
            </div>
            <div className="container-text">
              <h3>Consultation</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="container-content">
            <div className="container-text">
              <h3>When to consult</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="container-image">
              <img src={image1} alt="Container 3" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="container-content">
            <div className="container-image">
              <img src={image1} alt="Container 4" />
            </div>
            <div className="container-text">
              <h3>FAQS</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="container-content">
            <div className="container-text">
              <h3>Container 5</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="container-image">
              <img src={image1} alt="Container 5" />
            </div>
          </div>
        </div>
      </div>
  
    );
  };

  export default PsychiatristsPage;