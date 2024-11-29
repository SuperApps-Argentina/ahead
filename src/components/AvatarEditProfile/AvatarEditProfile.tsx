import React from "react";
import styles from "./AvatarEditProfile.module.css";

interface AvatarEditProfileProps {
  avatarUrl: string; // URL del avatar
  userName: string;  // Nombre del usuario
  lastVisit: string; // Última visita
  onEdit: () => void; // Función para manejar la edición
}

const AvatarEditProfile: React.FC<AvatarEditProfileProps> = ({ avatarUrl, userName, lastVisit, onEdit }) => {
  return (
    <div className={styles.header}>
    <div className={styles.profile}>
      {/* Avatar sobresalido */}
      <img
        src={avatarUrl}
        alt={`${userName}'s avatar`}
        className={styles.avatar}
      />
      {/* Contenedor del texto */}
      <div>
        <p className={styles.userName}>{userName}</p>
        <p className={styles.lastVisit}>Last visit: {lastVisit}</p>
      </div>
    </div>
    {/* Botón de edición */}
    <button onClick={onEdit} className={styles.editButton}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        width="24px"
        height="24px"
        className={styles.editIcon}
      >
        <path d="M14.06 9.02L14.98 9.94L6.92 18H6V17.08L14.06 9.02ZM17.66 3C17.41 3 17.15 3.1 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C18.18 3.1 17.92 3 17.66 3V3ZM14.06 6.19L3 17.25V21H6.75L17.81 9.94L14.06 6.19V6.19Z" />
      </svg>
    </button>
  </div>
  );
};

export default AvatarEditProfile;
