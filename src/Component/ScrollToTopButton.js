import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css'; // Import the CSS file for styling
import Rightside from './Rightside';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >  9*window.innerHeight/10) {
        setIsVisible(true); // Set isVisible to false to hide the button
      } else {
        setIsVisible(false); // Set isVisible to true to show the button
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`scroll-to-top-button ${isVisible ? 'hidden' : 'visible'}`}>
      {/* Conditionally render the Rightside.js component based on `isVisible` */}
      {isVisible && <Rightside />}
    </div>
  );
}
export default ScrollToTopButton;
