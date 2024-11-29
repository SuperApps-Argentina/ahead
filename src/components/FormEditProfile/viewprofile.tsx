"use client";

import React, { useState } from "react";
import styles from "./viewprofile.module.css";

const ViewProfile = () => {
  const [userData] = useState({
    email: "jhondoe@example.com",
    password: "password123",  // Contraseña visible por defecto
    phone: "+54 9 351 5687 123",
    city: "Córdoba",
    country: "Argentina",
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className={styles.form}>
      <label className={styles.label}>
        Your Email
        <input
          type="email"
          value={userData.email}
          className={styles.input}
          disabled
        />
      </label>

      <label className={styles.label}>
        Your Password
        <div className={styles.passwordContainer}>
          {/* Aquí cambiamos entre "password" y "text" según el estado de showPassword */}
          <input
            type={showPassword ? "text" : "password"}
            value={userData.password}
            className={styles.input}
            disabled
          />
          <span
            className={`${styles.eyeIcon} ${showPassword ? styles.open : styles.closed}`}
            onClick={togglePasswordVisibility}
          >
            {/* Ojo abierto cuando se muestra la contraseña y cerrado cuando no */}
            {showPassword ? "👁️" : "👁️‍🗨️"}
          </span>
        </div>
      </label>

      <label className={styles.label}>
        Your Phone
        <input
          type="tel"
          value={userData.phone}
          className={styles.input}
          disabled
        />
      </label>

      <label className={styles.label}>
        City State
        <select
          value={userData.city}
          className={styles.select}
          disabled
        >
          <option value={userData.city}>{userData.city}</option>
        </select>
      </label>

      <label className={styles.label}>
        Country
        <select
          value={userData.country}
          className={styles.select}
          disabled
        >
          <option value={userData.country}>{userData.country}</option>
        </select>
      </label>
    </div>
  );
};

export default ViewProfile;
