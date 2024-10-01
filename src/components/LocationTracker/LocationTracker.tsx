"use client"; // Esto convierte el archivo en un Client Component

import React, { useState, useEffect } from 'react';

const LocationTracker: React.FC = () => {
  const [position, setPosition] = useState<{ lat: number; lng: number }>({
    lat: -30.724583,
    lng: -62.016528,
  });

  const [path, setPath] = useState<{ lat: number; lng: number }[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [watchId, setWatchId] = useState<number | null>(null); // Almacena el ID del watch
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // Almacena mensajes de error

  const handleStartRecording = () => {
    if (navigator.geolocation) {
      setIsRecording(true);
      setPath([]); // Limpiar el recorrido anterior
      startTracking(); // Iniciar el seguimiento de la ubicación
      setErrorMessage(null); // Limpiar mensajes de error
    } else {
      setErrorMessage("La geolocalización no está disponible en este dispositivo.");
    }
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    if (watchId) {
      navigator.geolocation.clearWatch(watchId); // Detener el seguimiento
      setWatchId(null); // Limpiar el watchId
    }
  };

  const startTracking = () => {
    const id = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setPosition({ lat: latitude, lng: longitude });
        setPath((prevPath) => [...prevPath, { lat: latitude, lng: longitude }]);
      },
      (error) => {
        console.error("Error obteniendo la ubicación", error);
        setErrorMessage("Error obteniendo la ubicación. Verifica los permisos y la configuración de tu dispositivo."); // Muestra un mensaje de error
      },
      {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 10000,
      }
    );
    setWatchId(id); // Guardar el ID del watch
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="flex-grow flex items-center justify-center">
        {isRecording && (
          <div>
            <div 
              style={{
                position: 'absolute',
                top: `${position.lat}px`, // Simulando la posición en la pantalla
                left: `${position.lng}px`, // Simulando la posición en la pantalla
                width: '10px',
                height: '10px',
                backgroundColor: 'blue',
                borderRadius: '50%',
                transition: 'top 0.1s, left 0.1s'
              }}
            />
            {/* Dibuja el recorrido en líneas */}
            {path.length > 0 && (
              <div 
                style={{
                  position: 'absolute',
                  backgroundColor: 'rgba(0, 0, 255, 0.3)', // Color azul para el recorrido
                  width: '100%',
                  height: '100%',
                  clipPath: `path("${path.map((point, index) => 
                    `${index === 0 ? 'M' : 'L'} ${point.lng} ${point.lat}`
                  ).join(' ')} Z")`
                }}
              />
            )}
          </div>
        )}
        {errorMessage && <div className="text-red-500">{errorMessage}</div>}
      </div>
      <div className="p-4">
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <button 
            onClick={handleStartRecording} 
            disabled={isRecording} 
            style={{ margin: '0 10px', padding: '10px 20px', fontSize: '16px' }}
          >
            Iniciar
          </button>
          <button 
            onClick={handleStopRecording} 
            disabled={!isRecording} 
            style={{ margin: '0 10px', padding: '10px 20px', fontSize: '16px' }}
          >
            Detener
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationTracker;
