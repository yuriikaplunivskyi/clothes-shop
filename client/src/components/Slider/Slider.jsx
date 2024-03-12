import "./slider.scss";

import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import { useState } from "react";
const Slider = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://st.hzcdn.com/simgs/pictures/wine-cellars/wardrop-wirth-crawford-builders-img~1ce1be7901b8a97c_4-9263-1-13c6583.jpg",
    "https://media.istockphoto.com/id/600100918/photo/kingdom-of-fashion.jpg?s=612x612&w=0&k=20&c=w7hr1Yd_I0yg6mvZWZRqQ7V4-VeFwvEUsofi1iKwI2Y=",
    "https://www.kinowear.com/wp-content/uploads/2016/03/Wardrobe.jpg",
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
        {data.map((image, index) => (
          <img key={index} src={image} alt={`photo-slide-${index}`} />
        ))}
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