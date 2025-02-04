// Import necessary dependencies
import React from "react";
import styles from './Login.module.scss';
import useLoginViewModel from "./LoginVM";

// Main Login Component
const Login: React.FC = () => {
  const { formData, handleInputChange, handleLogin, handleRegister } =
    useLoginViewModel();

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginPage__container}>
        <h2 className={styles.loginPage__title}>Login</h2>
        <form className={styles.loginPage__form}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleInputChange}
            className={styles.loginPage__formInput}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className={styles.loginPage__formInput}
          />
          <div className={styles.loginPage__buttonGroup}>
            <button
              type="button"
              onClick={handleLogin}
              className={`${styles.loginPage__button} ${styles["loginPage__button--login"]}`}
            >
              Login
            </button>
            <button
              type="button"
              onClick={handleRegister}
              className={`${styles.loginPage__button} ${styles["loginPage__button--register"]}`}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
