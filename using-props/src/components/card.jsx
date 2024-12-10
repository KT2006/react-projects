import React from 'react';

const Card = ({ subject, content, backgroundColor = "white", textColor = "black" }) => {
  return (
    <div 
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        padding: '1rem',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        margin: '0.5rem 0',
        width: '300px',
        textAlign: 'center',
      }}
    >
      <h2>{subject}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
