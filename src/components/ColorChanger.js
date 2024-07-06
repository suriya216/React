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
            <svg alt="arrow-icon" className="arrow-icon" onClick={handleToggle} width="52px" viewBox="0 0 11 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.06251 8.62497L2.06251 11.7246L7.74512 23L2.06251 34.2754L2.06251 37.375L8.9375 24.123V21.8769L2.06251 8.62497Z" fill="url(#paint0_linear_4_2)"/>
                <defs>
                  <linearGradient id="paint0_linear_4_2" x1="17" y1="23" x2="2.06251" y2="23" gradientUnits="userSpaceOnUse">
                    <stop offset="0.65443" stop-color="#000000" stop-opacity="0.8"/>
                    <stop offset="1" stop-color="white"/>
                  </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      ) : (
        <div className="revarrow-container">
          <div className="revarrow-mark">
            <svg alt="revarrow-icon" className="revarrow-icon" onClick={handleToggle} width="52px" viewBox="0 0 11 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.9375 37.375V34.2754L3.25489 23L8.9375 11.7246L8.9375 8.62497L2.06251 21.8769L2.06251 24.123L8.9375 37.375Z" fill="url(#paint0_linear_4_2)"/>
              <defs>
                <linearGradient id="paint0_linear_4_2" x1="-5.99999" y1="23" x2="8.9375" y2="23" gradientUnits="userSpaceOnUse">
                  <stop offset="0.65443" stop-color="#ffffff" stop-opacity="0.4"/>
                  <stop offset="1" stop-color="#000000" stop-opacity="0.8"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

export default ColorChanger;
