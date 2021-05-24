import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import Grid from './Grid';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  
  const [posters, setPosters] = useState([]);
  useEffect(() => {
    // logic to get posters from api and load them into state after mounting
    const API_KEY = process.env.REACT_APP_API_KEY;
    const MOVIE_IDS = [
      '664',
      '218',
      '258480',
      '9619',
      '1637',
      '1493',
      '329',
      '398818',
      '671',
      '954',
      '49047',
      '27205',
      '114',
      '19995',
      '162',
    ];

    Promise
      // get array of responses for each movie
      .all(MOVIE_IDS.map((movieId) => {
        return fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
        );
      }))
      // get array of movie objects for each response
      .then((resArr) => {
        return Promise.all(resArr.map((res) => res.json()));
      })
      // get array of poster urls from each movie object
      .then((movies) => {
        setPosters(movies.map((movie) => {
          return {
            url: `https://image.tmdb.org/t/p/w300${movie.poster_path}`,
            name: movie.original_title,
            id: movie.id,
            selected: false
          };
        }));
      })
      .catch((err) => console.error(err));
  }, []);

  const onClickedPoster = (e) => {
    // find poster clicked. If poster already clicked, reset all
    for (let i = 0; i < posters.length; i++) {
      if (e.currentTarget.id === String(posters[i].id)) {
        if (posters[i].selected) {
          if (score > topScore) { // update top score if new record set
            setTopScore(score);
          }

          // reset score count
          setScore(0);

          // reset selected property of every poster
          const currentPosters = [...posters];
          setPosters(currentPosters.map((poster) => {
            poster.selected = false;
            return poster;
          }));
          
          return;
        }
        // increment score by 1
        setScore(score + 1);
        
        // update selected key of clicked poster
        const currentPosters = [...posters];
        currentPosters[i].selected = true;
        setPosters(currentPosters);
        
        return;
      }
    }
  };
  
  return (
    <div>
      <Header score={score} topScore={topScore} />
      <Grid posters={posters} onClickedPoster={onClickedPoster} />
      <Footer />
    </div>
  );
}

export default App;
