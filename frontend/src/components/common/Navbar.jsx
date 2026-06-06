import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If scrollY is greater than 80, set scrolled to true
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
    // If 'scrolled' is true, add the 'scrolled' class
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}><NavLink to="/">TickTrack</NavLink></div>
      
      <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`${styles.links} ${isOpen ? styles.showMenu : ''}`}>
        <li className={styles.linkItem}><a href="#Hero">Home</a></li>
        <li className={styles.linkItem}><a href="#services">Services</a></li>
        <li className={styles.linkItem}><a href="#contact">Contact</a></li>
        <NavLink to="/login" className={styles.navBtn}>Get Started</NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;