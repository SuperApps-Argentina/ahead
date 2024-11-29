"use client";

import React, { useState } from 'react';
import MapLocation from '../../components/MapLocation/MapLocation';
import styles from './page.module.css';

const MapPage: React.FC = () => {
  const [position, setPosition] = useState<{ lat: number; lng: number } | null>(null);
  const [path, setPath] = useState<{ lat: number; lng: number }[]>([]);
  const [tracking, setTracking] = useState<boolean>(false);

  const handleLocationUpdate = (newPosition: { lat: number; lng: number }) => {
    setPosition(newPosition);
    setPath((prevPath) => [...prevPath, newPosition]);
  };

  const toggleTracking = () => {
    setTracking((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <MapLocation
        position={position}
        path={path}
        onToggleTracking={toggleTracking}
        isTracking={tracking}
      />
    </div>
  );
};

export default MapPage;
