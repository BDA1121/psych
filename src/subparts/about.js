import image1 from './../images/about.jfif';

const AboustUsPage = () => {
    return (
        <div className="about-page">
        <div className="header">
          <h1>About Us</h1>
        </div>
        <div className="content">
          <div className="image-container">
            <img src={image1} alt="About Us" />
          </div>
          <div className="text-container">
            <h2>Welcome to Our Company</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula lacinia sem id
              efficitur. Nulla facilisi. Quisque sit amet varius arcu. Vivamus rutrum nulla sit amet
              facilisis vestibulum. Fusce dapibus euismod mi, id feugiat eros viverra a. Phasellus
              blandit lectus ac consequat efficitur. Sed varius arcu in tincidunt condimentum. Aliquam
              blandit ipsum sit amet orci tempor bibendum. Donec at erat a sem tincidunt hendrerit
              vitae nec mi. Cras consectetur nunc risus, vitae euismod arcu molestie sed.
            </p>
            <p>
              Sed aliquet diam vitae leo feugiat, at commodo massa tincidunt. Morbi ut tempor est. Sed
              lacinia dapibus orci, nec malesuada sapien consequat sed. Aliquam finibus est ac
              molestie efficitur. Fusce vestibulum blandit sem, ac tempus tellus consequat non. Nullam
              posuere, nunc ut cursus tincidunt, arcu quam feugiat ligula, nec dapibus orci sem in
              arcu. Sed convallis aliquet magna a maximus. Sed fringilla sed diam at blandit. Fusce
              consequat dui sed ex pretium, eget gravida sapien tincidunt. Mauris dignissim semper
              quam, nec pulvinar tellus ullamcorper vitae.
            </p>
          </div>
        </div>
      </div>
    );
  };

  export default AboustUsPage;