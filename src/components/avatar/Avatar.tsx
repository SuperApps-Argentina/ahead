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
        <div className={styles.containerImg}>
            <img 
              className={styles.imgAvatar} 
              src={imageUrl || defaultImageUrl} 
              alt="Avatar" 
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = defaultImageUrl; }} 
            />
        </div>
        <div className={styles.containerLevel}>
            <h1 className={styles.level}>Nivel {level}</h1>
        </div>
    </div>
  );
}

export default Avatar;
