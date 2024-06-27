import React, { useState, useEffect } from 'react';
import '../App.css';

function ColorChanger() {
  const [isArrowVisible, setIsArrowVisible] = useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = isArrowVisible ? '#FFFFFF' : '#000000';
  }, [isArrowVisible]);

  const handleToggle = () => {
    setIsArrowVisible(!isArrowVisible);
  };

  return (
    <div className="arrow">
      {isArrowVisible ? (
        <div className="arrow-container">
          <div className="arrow-mark" >
            <img src='arrow.svg' alt="arrow-icon" className="arrow-icon" onClick={handleToggle}/>
          </div>
        </div>
      ) : (
        <div className="revarrow-container">
          <div className="revarrow-mark">
            <img src='revarrow.svg' alt="revarrow-icon" className="revarrow-icon" onClick={handleToggle}/>
          </div>
        </div>
      )}
    </div>
  );
}

export default ColorChanger;
