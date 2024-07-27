import React from 'react';
import { useNavigate } from 'react-router-dom';

function Program() {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate('/about');
  };

  const goToContact = () => {
    navigate('/contact');
  };

  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to the Home page!</p>
      <button onClick={goToAbout}>Go to About</button>
      <button onClick={goToContact}>Go to Contact</button>
    </div>
  );
}

export default Program;
