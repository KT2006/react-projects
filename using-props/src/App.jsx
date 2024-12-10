import React, { useState } from 'react';
import Card from './components/card';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  // Example data for cards
  const cardData = [
    {
      subject: "Working Check",
      content: "Kuch bhi likh kr dekh hi leta hu ki kahi kaam kr rha h ya nhi",
      backgroundColor: "#f9f9f9",
      textColor: "#333",
    },
    {
      subject: "2nd Card Check",
      content: "Second card ka working check kr rha hu it better be working",
      backgroundColor: "#e0f7fa",
      textColor: "#00796b",
    },
    {
      subject: "Dynamic Card Example",
      content: "Cards are now dynamically generated!",
      backgroundColor: "#ffe0b2",
      textColor: "#e65100",
    },
  ];

  return (
    <>
      <h1>Using props to dynamically display user information on cards</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {cardData.map((card, index) => (
          <Card
            key={index}
            subject={card.subject}
            content={card.content}
            backgroundColor={card.backgroundColor}
            textColor={card.textColor}
          />
        ))}
      </div>
    </>
  );
}

export default App;
