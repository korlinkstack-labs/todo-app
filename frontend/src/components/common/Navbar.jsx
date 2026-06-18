import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <NavLink to="/" onClick={() => setIsOpen(false)}>TickTrack</NavLink>
      </div>
      
      <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`${styles.links} ${isOpen ? styles.showMenu : ''}`}>
        <li className={styles.linkItem}>
          <a href="#Hero" onClick={() => setIsOpen(false)}>Home</a>
        </li>
        <li className={styles.linkItem}>
          <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
        </li>
        <li className={styles.linkItem}>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </li>
        <NavLink 
          to="/login" 
          className={styles.navBtn} 
          onClick={() => setIsOpen(false)}
        >
          Get Started
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;