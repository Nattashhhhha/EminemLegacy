
import React, { useState } from 'react';
import {head} from "../assets"
const Header = () => {
  const [rotation, setRotation] = useState(0);

  const handleWheel = (event) => {
    // Adjust the rotation angle based on the scroll direction
    const newRotation = rotation + (event.deltaY > 0 ? 10 : -10);
    
    // Update the rotation state, ensuring it stays within the range [0, 360)
    setRotation((newRotation + 360) % 360);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <img
        src={head}
        alt="Rotatable Photo"
        style={{ transform: `rotate(${rotation}deg)`, transition: 'transform 0.2s ease-in-out' }}
        onWheel={handleWheel}
      />
    </div>
  );
};

export default Header;
