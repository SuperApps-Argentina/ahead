import React, { useState, useEffect } from 'react';
import GoogleMapComponent from '../../components/GoogleMap/GoogleMapComponent';

interface Position {
  latitude: number;
  longitude: number;
}

const GeolocationTracker: React.FC = () => {
  const [positions, setPositions] = useState<Position[]>([]);
  const [distance, setDistance] = useState<number>(0);
  const [targetDistance, setTargetDistance] = useState<number>(0);
  const [tracking, setTracking] = useState<boolean>(false);

  const haversineDistance = (pos1: Position, pos2: Position) => {
    const R = 6371e3;
    const φ1 = pos1.latitude * (Math.PI / 180);
    const φ2 = pos2.latitude * (Math.PI / 180);
    const Δφ = (pos2.latitude - pos1.latitude) * (Math.PI / 180);
    const Δλ = (pos2.longitude - pos1.longitude) * (Math.PI / 180);

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) *
      Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const d = R * c;
    return d / 1000;
  };

  useEffect(() => {
    let watchId: number;

    if (tracking) {
      if ('geolocation' in navigator) {
        watchId = navigator.geolocation.watchPosition(
          (position) => {
            const newPosition: Position = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            };

            setPositions((prevPositions) => {
              if (prevPositions.length > 0) {
                const lastPosition = prevPositions[prevPositions.length - 1];
                const newDistance = haversineDistance(lastPosition, newPosition);
                setDistance(prevDistance => prevDistance + newDistance);
              }
              return [...prevPositions, newPosition];
            });
          },
          (err) => {
            console.error(`Error ${err.code}: ${err.message}`);
          },
          {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0,
          }
        );
      } else {
        console.error('Geolocalización no soportada por el navegador');
      }
    }

    return () => {
      if (watchId) navigator.geolocation.clearWatch(watchId);
    };
  }, [tracking]);

  const startTracking = () => {
    setPositions([]);
    setDistance(0);
    setTracking(true);
  };

  const stopTracking = () => {
    setTracking(false);
    if (distance >= targetDistance) {
      alert('¡Felicidades! Has alcanzado tu objetivo.');
    } else {
      alert('No alcanzaste la distancia objetivo.');
    }
  };

  return (
    <div>
      <h1>Rastreador de Geolocalización</h1>
      <input
        type="number"
        placeholder="Distancia objetivo (km)"
        value={targetDistance}
        onChange={(e) => setTargetDistance(Number(e.target.value))}
      />
      <button onClick={startTracking}>Comenzar</button>
      <button onClick={stopTracking} disabled={!tracking}>Detener</button>
      <p>Distancia recorrida: {distance.toFixed(2)} km</p>

      <GoogleMapComponent positions={positions.map(pos => ({ lat: pos.latitude, lng: pos.longitude }))} />
    </div>
  );
};

export default GeolocationTracker;
