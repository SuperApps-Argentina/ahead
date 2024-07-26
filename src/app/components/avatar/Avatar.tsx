import React, { useState, useEffect } from 'react';

import "./avatar-modules.css";

import Image from 'next/image';

import defaultImageUrl from '../../../img/avatarDefaultIMG.svg';

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

  // Retorna la estructura TSX del componente
  return (
    <div className='container-avatar'>
      <div className='container-img'>
        <Image 
          className='img-avatar' 
          src={currentImageUrl} 
          alt="Avatar" 
          width={150}
          height={150}
          onError={handleImageError}
        />
      </div>
      <div className='container-nivel'>
        <h1 className='level'>Nivel {level}</h1>
      </div>
    </div>
  );
}

export default Avatar;

