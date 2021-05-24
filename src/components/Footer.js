import React from 'react';
import '../styles/Footer.css';

const Footer = (props) => {
  return (
    <footer>
      <div>
        <p>Data provided by</p>
        <a href='https://www.themoviedb.org/'>
          <img 
            src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg'
            alt='TMDb logo'
            width='100'
          />
        </a>
      </div>
      <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
    </footer>
  );
}

export default Footer;
