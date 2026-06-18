import { useState } from 'react';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import styles from './Contact.module.css';

const Contact = () => {
  // 1. State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 2. Here is where you will integrate your backend/API call later
    console.log('Message sent:', formData);
    alert('Thank you for reaching out!');
    setFormData({ name: '', email: '', message: '' }); // Clear form
  };

  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.container}>
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
          
          <form className={styles.form} onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
            <textarea 
              name="message" 
              placeholder="Your Message" 
              rows="5" 
              value={formData.message} 
              onChange={handleChange} 
              required
            ></textarea>
            <button type="submit" className={styles.submitBtn}>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;