import React from 'react';
import '../styles/Grid.css';

const Grid = (props) => {
  const { posters, onClickedPoster } = props;
  const currentPosters = [...posters];
  const shuffledPosters = [];

  while (currentPosters.length > 0) {
    const randomIndex = Math.floor(Math.random() * currentPosters.length);
    shuffledPosters.push(currentPosters[randomIndex]);
    currentPosters.splice(randomIndex, 1);
  }

  return (
    <div className='poster-grid'>
      {shuffledPosters.map((poster) => (
        <div 
          className='poster' 
          key={poster.id} 
          id={poster.id} 
          onClick={onClickedPoster}
        >
          <img 
            src={poster.url} 
            alt={`${poster.name} poster`} 
          />
        </div>
      ))}
    </div>
  );
}

export default Grid;
