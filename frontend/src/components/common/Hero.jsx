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
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [isPaused]); 

  return (
    <section 
      id="Hero"
      className={styles.hero} 
      style={{ backgroundImage: `url(${slides[index].img})` }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.overlay} />

      {/* Arrows */}
      <button onClick={prevSlide} className={`${styles.arrow} ${styles.arrowLeft}`} aria-label="Previous Slide">&lt;</button>
      <button onClick={nextSlide} className={`${styles.arrow} ${styles.arrowRight}`} aria-label="Next Slide">&gt;</button>
      

      <div className={styles.dots}>
        {slides.map((_, i) => (
          <button 
            key={i} 
            className={index === i ? `${styles.dot} ${styles.activeDot}` : styles.dot} 
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
      
      <div className={styles.slideContainer} aria-live="polite">
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