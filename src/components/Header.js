import React from 'react';
import '../styles/Header.css';
import logo from '../assets/film-roll.png';

const Header = (props) => {
  const { score, topScore } = props;
  
  return (
    <header>
      <div className='title'>
        <img src={logo} alt='Film roll logo'/>
        <h1>Movie Memory Card</h1>
      </div>
      <div className='scoreboard'>
        <p><span className='score-label'>Score:</span><span>{score}</span></p>
        <p><span className='score-label'>Best score:</span><span>{topScore}</span></p>
      </div>
    </header>
  );
}

export default Header;
