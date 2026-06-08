import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import styles from './Login.module.css';
import illustration from '../../../assets/Login.png';
const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <div className={styles.formSection}>
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Enter Username" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Enter Password" onChange={handleChange} required />
            
            <div className={styles.checkboxContainer}>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember Me</label>
            </div>
            
            <button type="submit" className={styles.loginBtn}>Login</button>
          </form>

          <div className={styles.socialIconsContainer}>
            <p className={styles.socialPrompt}>Or, Login with</p>
            <div className={styles.socialIcons}>
              <button type="button"><FaFacebook /></button>
              <button type="button"><FaGoogle /></button>
              <button type="button"><FaTwitter /></button>
            </div>
          </div>
          
          <p className={styles.registerLink}>
            Don't have an account? <Link to="/register">Create One</Link>
          </p>
        </div>

        <div className={styles.illustrationSection}>
          <img src={illustration} alt="Login Illustration" className={styles.illustration} />
        </div>
      </div>
    </div>
  );
};

export default Login;