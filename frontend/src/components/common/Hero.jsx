import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Hero.module.css';

import orgImg from '../../assets/Caro1.jpg';
import deadlineImg from '../../assets/img2.jpg';
import progressImg from '../../assets/Car3.jpg';

const slides = [
  { title: "Stay Organized", desc: "Create, manage, and track your daily tasks digitally.", btn: "Get Started", img: orgImg, link: "/register" },
  { title: "Never Miss a Deadline", desc: "Set due dates and reminders.", btn: "Manage Tasks", img: deadlineImg, link: "/register" },
  { title: "Watch Progress Grow", desc: "Monitor your performance with ease.", btn: "View Progress", img: progressImg, link: "/Login" }
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <section 
      className={styles.hero} 
      style={{ backgroundImage: `url(${slides[index].img})` }}
    >
      <div className={styles.overlay} />

      {/* Arrows */}
      <button onClick={prevSlide} className={`${styles.arrow} ${styles.arrowLeft}`}>&lt;</button>
      <button onClick={nextSlide} className={`${styles.arrow} ${styles.arrowRight}`}>&gt;</button>
      
      {/* Dots */}
      <div className={styles.dots}>
        {slides.map((_, i) => (
          <button 
            key={i} 
            className={index === i ? `${styles.dot} ${styles.activeDot}` : styles.dot} 
            onClick={() => setIndex(i)} 
          />
        ))}
      </div>
      
      <div className={styles.slideContainer}>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className={styles.slideContent}
          >
            <h1>{slides[index].title}</h1>
            <p>{slides[index].desc}</p>
            
            <Link to={slides[index].link} className={styles.cta}>
              {slides[index].btn}
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;