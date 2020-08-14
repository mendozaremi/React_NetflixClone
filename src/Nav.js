import React, { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0f"
        alt="Netflix Logo"
      />

      <img
        className="nav_avatar"
        src="https://pbs.twimg.com/profile_images/12401199904115"
        alt="Avatar Logo"
      />
    </div>
  );
}

export default Nav;
