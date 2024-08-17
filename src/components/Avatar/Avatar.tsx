'use client'; 

import React, { useState, useEffect }  from 'react';
import Image from 'next/image';


import styles from './Avatar.module.css';
import defaultImageUrl from '../../img/avatarDefaultIMG.svg';


interface AvatarProps {
  imageUrl?: string;
  level: number;
}


const Avatar: React.FC<AvatarProps> = ({ imageUrl, level }) => {
  const [currentImageUrl, setCurrentImageUrl] = useState(imageUrl || defaultImageUrl);

  useEffect(() => {
    setCurrentImageUrl(imageUrl || defaultImageUrl);
  }, [imageUrl]);

  const handleImageError = () => {
    setCurrentImageUrl(defaultImageUrl);
  };

  return (
    <div className={styles.containerAvatar}>
        <div className={styles.containerImg}>
            <Image 
              className={styles.imgAvatar} 
              src={currentImageUrl} 
              alt="Avatar"
              width={150}
              height={150} 
              onError={(e) => {handleImageError} }
            />
        </div>
        <div className={styles.containerLevel}>
            <h1 className={styles.level}>Nivel {level}</h1>
        </div>
    </div>
  );
}

export default Avatar;