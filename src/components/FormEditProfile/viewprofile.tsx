import React, { useState } from "react";
import styles from "./viewprofile.module.css";

interface ViewProfileProps {
  isEditing: boolean;
  onSave: () => void;
  onCancel:() => void;  // Función para manejar el guardado de los cambios
  avatarUrl: string;
  userName: string;
  lastVisit: string;
  onAvatarChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;  // Función para manejar cambios en nombre
}

const ViewProfile: React.FC<ViewProfileProps> = ({
  isEditing,
  onSave,
  onCancel,
  avatarUrl,
  userName,
  lastVisit,
  onAvatarChange,
  onNameChange  // Recibir la función para manejar el nombre
}) => {
  const [userData, setUserData] = useState({
    email: "jhondoe@example.com",
    password: "password123",
    phone: "+54 9 351 5687 123",
    city: "Córdoba",
    country: "Argentina",
  });

  const [originalAvatarUrl, setOriginalAvatarUrl] = useState(avatarUrl);  // Guardar el avatar original
  const [originalUserData, setOriginalUserData] = useState(userData);  // Guardar los datos originales

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    // Revertir la foto y demás datos a su valor original
    setUserData(originalUserData);
    setOriginalAvatarUrl(avatarUrl);  // Restaurar el avatar original
  };

  return (
    <div className={styles.form}>
      {/* Input para cambiar la foto solo si está en modo de edición */}
      {isEditing && (
        <div className={styles.avatarChangeContainer}>
          <img src={avatarUrl} alt="Avatar" className={styles.avatar} />
          <input
            type="file"
            accept="image/*"
            onChange={onAvatarChange}
            className={styles.avatarInput}
          />
        </div>
      )}

      {/* Campo para el nombre y apellido */}
      <label className={styles.label}>
        Your Name
        <input
          type="text"
          value={userName}
          className={styles.input}
          disabled={!isEditing}
          name="userName"
          onChange={onNameChange} // Llamamos a la función onChange del nombre
        />
      </label>

      <label className={styles.label}>
        Your Email
        <input
          type="email"
          value={userData.email}
          className={styles.input}
          disabled={!isEditing}
          name="email"
          onChange={handleChange}
        />
      </label>

      <label className={styles.label}>
        Your Password
        <div className={styles.passwordContainer}>
          <input
            type={showPassword ? "text" : "password"}
            value={userData.password}
            className={styles.input}
            disabled={!isEditing}
            name="password"
            onChange={handleChange}
          />
          <span
            className={`${styles.eyeIcon} ${showPassword ? styles.open : styles.closed}`}
            onClick={togglePasswordVisibility}
          >
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
          disabled={!isEditing}
          name="phone"
          onChange={handleChange}
        />
      </label>

      <label className={styles.label}>
        City State
        <select
          value={userData.city}
          className={styles.select}
          disabled={!isEditing}
          name="city"
          onChange={handleChange}
        >
          <option value={userData.city}>{userData.city}</option>
        </select>
      </label>

      <label className={styles.label}>
        Country
        <select
          value={userData.country}
          className={styles.select}
          disabled={!isEditing}
          name="country"
          onChange={handleChange}
        >
          <option value={userData.country}>{userData.country}</option>
        </select>
      </label>

      {/* Botones para guardar o cancelar */}
      <div className={styles.buttonContainer}>
        {isEditing && (
          <>
            <button className={styles.saveButton} onClick={onSave}>Guardar</button>
            <button
              className={styles.cancelButton}
              onClick={handleCancel}
            >
              Cancelar
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ViewProfile;
