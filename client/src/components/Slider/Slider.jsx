import "./slider.scss";

import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import { useState } from "react";
const Slider = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://golis.com.ua/wp-content/uploads/IMG_7934-scaled.webp?id=10292",
    "https://golis.com.ua/wp-content/uploads/IMG_9161-1000x1309.jpg",
    "https://golis.com.ua/wp-content/uploads/IMG_9153-1000x1333.jpg",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2: (prev) => prev -1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev +1)
  };
  
  return (
    <div className='slider'>
      <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        <img src={data[0]} alt="photo-slide" />
        <img src={data[1]} alt="photo-slide" />
        <img src={data[2]} alt="photo-slide" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlinedIcon/>
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon/>
        </div>
      </div>
    </div>
  )
}

export default Slider