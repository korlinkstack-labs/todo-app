import { FaCheckCircle, FaCalendarAlt, FaChartLine } from 'react-icons/fa';
import styles from './Services.module.css';

const Services = () => {
  const features = [
    { icon: <FaCheckCircle />, title: "Smart Organization", desc: "Easily create and categorize your tasks." },
    { icon: <FaCalendarAlt />, title: "Deadline Tracking", desc: "Set reminders so you never miss a beat." },
    { icon: <FaChartLine />, title: "Progress Monitoring", desc: "Watch your performance grow over time." }
  ];

  return (
    <section className={styles.services} id="services">
      <h2 className={styles.title}>What We Offer</h2>
      <div className={styles.grid}>
        {features.map((feature, i) => (
          <div key={i} className={styles.card}>
            <div className={styles.icon}>{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;