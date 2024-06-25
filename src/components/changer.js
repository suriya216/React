import React, { useState } from 'react';
import ColorChangingArrow from './ColorChangingArrow';

function changer(){
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
        setIsClicked(true);
    };
    return (
        <ColorChangingArrow isClicked={isClicked} handleClick={handleClick} />
    );
}

export default changer;