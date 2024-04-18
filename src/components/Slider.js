  import React, { useEffect, useState } from 'react'
  import { data } from "./data"

  const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    useEffect(() => {
      const interval = setInterval(() => {
        handleNextSlide()
         }, 20000); 
  
      return () => clearInterval(interval);
    }, []);

    const handleNextSlide = () => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % data.length);
    };
  
    const handlePreviousSlide = () => {
      setCurrentIndex((currentIndex) => (currentIndex - 1 + data.length) % data.length);
    };
  
  

    return (
      <div className=''>
       <button onClick={handlePreviousSlide}>Previous</button>
        <img src={data[currentIndex].image} />
      <button onClick={handleNextSlide}>Next</button>
      </div>
    )
  }

  export default Slider