// Importa React y los hooks necesarios
import React, { useState, useEffect } from 'react';

// Importa el archivo CSS específico para estilizar este componente
import "./avatar-modules.css";

// Importa el componente Image de Next.js
import Image from 'next/image';

// Importa la imagen SVG predeterminada
import defaultImageUrl from '../../../img/avatarDefaultIMG.svg';

// Define los tipos de las props que el componente Avatar espera recibir
interface AvatarProps {
  imageUrl?: string; // Propiedad opcional para la URL de la imagen del avatar
  level: number; // Propiedad requerida para el nivel del usuario
}

// Define el componente Avatar como un componente funcional de React
const Avatar: React.FC<AvatarProps> = ({ imageUrl, level }) => {
  // Estado para manejar la URL de la imagen actual
  const [currentImageUrl, setCurrentImageUrl] = useState(imageUrl || defaultImageUrl);

  // Efecto para actualizar la URL de la imagen cuando imageUrl cambie
  useEffect(() => {
    setCurrentImageUrl(imageUrl || defaultImageUrl);
  }, [imageUrl]);

  // Maneja el error de carga de la imagen
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

// Exporta el componente Avatar para que pueda ser utilizado en otros archivos
export default Avatar;

