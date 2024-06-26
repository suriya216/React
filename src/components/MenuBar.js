import React, { useState } from 'react';
import '../App.css';

function MenuBar() {
  const [isArrowVisible, setIsArrowVisible] = useState(true);

  const handleToggle = () => {
    setIsArrowVisible(!isArrowVisible);
  };

  return (
    <div className="menubar">
      {isArrowVisible ? (
        <div className="menubar-container">
          <div className="menu-bar" >
            <img src="menucolor.svg" alt="menu-icon" className="menu-icon" onClick={handleToggle}/>
          </div>
        </div>
      ) : (
        <div className="revmenubar-container">
          <div className="revmenu-bar">
            <img src="menuwhite.svg" alt="revmenu-icon" className="revmenu-icon" onClick={handleToggle}/>
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuBar;