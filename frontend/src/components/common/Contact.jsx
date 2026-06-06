import { MdEmail, MdLocationOn } from 'react-icons/md';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contactSection}>
  <div className={styles.container}>
    {/* Heading is now part of the flow */}
    <h2 className={styles.heading}>Get in Touch</h2>
    
    <div className={styles.contentWrapper}>
      <div className={styles.info}>
        <h3>Let's talk about your tasks</h3>
        <p>Have questions or feedback about TickTrack? We’d love to hear from you!</p>
        
        <div className={styles.details}>
          <p><MdLocationOn /> Port Harcourt, Nigeria</p>
          <p><MdEmail /> support@ticktrack.com</p>
        </div>
      </div>
      
      <form className={styles.form}>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message" rows="5"></textarea>
        <button type="submit" className={styles.submitBtn}>Send Message</button>
      </form>
    </div>
  </div>
</section>
  );
};

export default Contact;