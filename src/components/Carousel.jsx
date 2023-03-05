import React, { useEffect, useState } from 'react';

function Carousel(props) {
  const { images } = props;

  const [counter, setCounter] = useState(0);
  const [actualImage, setActualImage] = useState(images[counter]);

  useEffect(() => {
    setActualImage(images[counter]);
  }, [counter]);

  const rightImg = () => {
    if (counter < 3) {
      setCounter(counter + 1);
    }
  };

  const leftImg = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <img src={actualImage} alt="" />
      <button onClick={leftImg}>left</button>
      <button onClick={rightImg}>right</button>
    </div>
  );
}

export default Carousel;
