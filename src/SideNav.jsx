import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft, FaHome, FaUser, FaCog } from 'react-icons/fa';
import './SideNav.css';

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidenav ${isOpen ? 'open' : ''}`}>
      <button className="toggle-btn" onClick={toggleNav}>
        {isOpen ? <FaArrowLeft /> : <FaArrowRight />}
      </button>
      <nav className="nav-links">
        <a href="#"><FaHome /> <span>Home</span></a>
        <a href="#"><FaUser /> <span>Profile</span></a>
        <a href="#"><FaCog /> <span>Settings</span></a>
      </nav>
    </div>
  );
};

export default SideNav;