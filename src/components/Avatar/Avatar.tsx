'use client'; 

import React from 'react';

import styles from './Avatar.module.css';

interface AvatarProps {
  imageUrl?: string;
  level: number;
}


const Avatar: React.FC<AvatarProps> = ({ imageUrl, level }) => {
  const defaultImageUrl = "https://via.placeholder.com/150"; 

  return (
    <div className={styles.containerAvatar}>
        {/* Contenedor de la imagen del avatar */}
        <div className={styles.containerImg}>
            {/* Imagen del avatar; usa imageUrl si se proporciona, de lo contrario usa defaultImageUrl */}
            {/* onError cambia la imagen a defaultImageUrl si hay un error al cargar imageUrl */}
            <img 
              className={styles.imgAvatar} 
              src={imageUrl || defaultImageUrl} 
              alt="Avatar" 
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = defaultImageUrl; }} 
            />
        </div>
        {/* Contenedor del nivel del usuario */}
        <div className={styles.containerLevel}>
            {/* Muestra el nivel del usuario pasado como prop */}
            <h1 className={styles.level}>Nivel {level}</h1>
        </div>
    </div>
  );
}

// Exporta el componente Avatar para que pueda ser utilizado en otros archivos
export default Avatar;
