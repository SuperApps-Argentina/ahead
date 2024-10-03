// src/components/LocationTracker/LocationTracker.tsx
import React, { useEffect } from 'react';

interface LocationTrackerProps {
  onLocationUpdate: (position: { lat: number; lng: number }) => void;
  tracking: boolean;
}

const LocationTracker: React.FC<LocationTrackerProps> = ({ onLocationUpdate, tracking }) => {
  useEffect(() => {
    if (tracking) {
      const watchId = navigator.geolocation.watchPosition(
        position => {
          const { latitude, longitude } = position.coords;
          onLocationUpdate({ lat: latitude, lng: longitude });
        },
        error => console.error(error),
        { enableHighAccuracy: true }
      );

      return () => {
        navigator.geolocation.clearWatch(watchId);
      };
    }
  }, [tracking, onLocationUpdate]);

  return null; // No se renderiza nada
};

export default LocationTracker;
