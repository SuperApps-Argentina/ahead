// Asegura que este componente se ejecute en el cliente
'use client'; 

// Importa React, necesario para crear componentes de React
import React from 'react';

// Importa el archivo CSS específico para estilizar este componente
import "./avatar-modules.css";

// Define los tipos de las props que el componente Avatar espera recibir
interface AvatarProps {
  // Propiedad opcional para la URL de la imagen del avatar, puede ser una cadena o estar ausente
  imageUrl?: string;
  // Propiedad requerida para el nivel del usuario, debe ser un número
  level: number;
}

// Define el componente Avatar como un componente funcional de React
// El componente acepta props que cumplen con la interfaz AvatarProps
const Avatar: React.FC<AvatarProps> = ({ imageUrl, level }) => {
  // URL de imagen predeterminada a usar si imageUrl no se proporciona o falla al cargar
  const defaultImageUrl = "https://via.placeholder.com/150"; 

  // Retorna la estructura TSX del componente
  return (
    // Contenedor principal del avatar, aplica estilos desde el CSS importado
    <div className='container-avatar'>
        {/* Contenedor de la imagen del avatar */}
        <div className='container-img'>
            {/* Imagen del avatar; usa imageUrl si se proporciona, de lo contrario usa defaultImageUrl */}
            {/* onError cambia la imagen a defaultImageUrl si hay un error al cargar imageUrl */}
            <img 
              className='img-avatar' 
              src={imageUrl || defaultImageUrl} 
              alt="Avatar" 
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = defaultImageUrl; }} 
            />
        </div>
        {/* Contenedor del nivel del usuario */}
        <div className='container-nivel'>
            {/* Muestra el nivel del usuario pasado como prop */}
            <h1 className='level'>Nivel {level}</h1>
        </div>
    </div>
  );
}

// Exporta el componente Avatar para que pueda ser utilizado en otros archivos
export default Avatar;
