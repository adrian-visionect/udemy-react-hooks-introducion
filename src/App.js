import React, { useEffect, useState } from 'react';

import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [isActive, setIsActive] = useState(true);

  // const handler = () => {
  //   setCounter(counter + 1);
  // };

  const toggleVisiblityCounter = () => {
    setIsActive((prevValue) => !prevValue);
  };

  // useEffect(() => {}, []);

  const counterComponent = isActive ? <Counter /> : null;

  return (
    <div>
      <button onClick={toggleVisiblityCounter}>Pokaż/ukryj komponent</button>
      {counterComponent}
    </div>
  );
};
const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleMouseMove = (event) => setCounter(event.clientX);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  });

  return (
    <div>
      <p>{counter}</p>
    </div>
  );
};

export default App;
