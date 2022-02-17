import React from 'react';

// this children is used because it became a styled component
function Card({children, reverse}) {
  return <div className={`card ${reverse && 'reverse'}`}>
    {children}
  </div>;
} 

export default Card;
