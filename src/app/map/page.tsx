// src/app/map/page.tsx
"use client"; // Asegúrate de que este componente sea un Client Component

import React, { useState } from 'react';
// import LocationTracker from '../../components/LocationTracker/LocationTracker';
// import MapLocation from '../../components/MapLocation/MapLocation';
import Map from '../../components/Map/Map'
import styles from './page.module.css'; // Asegúrate de que el archivo CSS esté en la carpeta correcta

const MapPage: React.FC = () => {
  // const [position, setPosition] = useState<{ lat: number; lng: number } | null>(null);
  // const [path, setPath] = useState<{ lat: number; lng: number }[]>([]);
  // const [tracking, setTracking] = useState<boolean>(false);

  // const handleLocationUpdate = (newPosition: { lat: number; lng: number }) => {
  //   setPosition(newPosition);
  //   setPath(prevPath => [...prevPath, newPosition]);
  // };

  // const toggleTracking = () => {
  //   setTracking(prev => !prev);
  // };

  return (
    <div className={styles.container}>
      {/* <LocationTracker onLocationUpdate={handleLocationUpdate} tracking={tracking} />
      <MapLocation position={position} path={path} onToggleTracking={toggleTracking} isTracking={tracking} />
      <button onClick={toggleTracking} className={styles.debugButton}>
        {tracking ? 'Detener' : 'Iniciar'}
      </button> */}
      <Map/>
    </div>
  );
};

export default MapPage;
