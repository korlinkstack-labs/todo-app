import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';
import illustration from '../../../assets/Register.png';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setIsLoading(true);
    // Backend Payload
    const payload = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      username: formData.username,
      email: formData.email,
      password: formData.password
    };

    console.log("Sending to Django:", payload);
    // Add your API call here: await fetch(...)
    setIsLoading(false);
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <div className={styles.formSection}>
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="firstName" placeholder="Enter First Name" onChange={handleChange} required />
            <input type="text" name="lastName" placeholder="Enter Last Name" onChange={handleChange} required />
            <input type="text" name="username" placeholder="Enter Username" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Enter Email" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Enter Password" onChange={handleChange} required />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
            
            <div className={styles.checkboxContainer}>
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">I agree to all terms</label>
            </div>
            
            <button type="submit" className={styles.loginBtn} disabled={isLoading}>
              {isLoading ? 'Registering...' : 'Register'}
            </button>
          </form>

          <p className={styles.registerLink}>
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </div>

        <div className={styles.illustrationSection}>
          <img src={illustration} alt="Register Illustration" className={styles.illustration} />
        </div>
      </div>
    </div>
  );
};

export default Register;