import "../styles/styles.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function createCarousel(a) {
  return (
    <div>
      <h3>{a}</h3>
    </div>
  );
}

export default function carousel({ input }) {
  return (
    <div className="App">
      <Slider
        dots={false}
        rows={2}
        slidesPerRow={3}
        autoplay={true}
        autoplaySpeed={3000}
        pauseOnHover={true}
      >
        {input.map(createCarousel)}
      </Slider>
    </div>
  );
}
