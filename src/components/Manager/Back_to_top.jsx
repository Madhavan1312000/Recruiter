import React from 'react'
import { useState,useEffect } from 'react';
const Back_to_top = () => {
    const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
        {isVisible && (
        <button
          className="btn btn-primary back-to-top"
          onClick={scrollToTop}
        style={{position:'fixed',bottom:'20px',right:'20px',display:'none'}}>
          Back to Top
        </button>
      )}
    </div>
  )
}

export default Back_to_top