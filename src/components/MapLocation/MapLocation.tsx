// src/components/MapLocation/MapLocation.tsx
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import ubicacionIcon from '../../img/ubicacion.png'; // Importa la imagen
import styles from './MapLocation.module.css'; // Importa el módulo de estilos

interface MapLocationProps {
  position: { lat: number; lng: number } | null;
  path: { lat: number; lng: number }[];
  onToggleTracking: () => void; // Prop para la función que controla el seguimiento
  isTracking: boolean; // Prop para el estado de seguimiento
}

const MapLocation: React.FC<MapLocationProps> = ({ position, path, onToggleTracking, isTracking }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<L.Map | null>(null);

  const DefaultIcon = L.icon({
    iconUrl:'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  useEffect(() => {
    if (mapRef.current) {
      mapInstance.current = L.map(mapRef.current).setView([0, 0], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
      }).addTo(mapInstance.current);

      const polyline = L.polyline(path, { color: 'blue' }).addTo(mapInstance.current);

      return () => {
        mapInstance.current?.remove();
      };
    }
  }, []);

  useEffect(() => {
    if (mapInstance.current && position) {
      mapInstance.current.setView([position.lat, position.lng], 13);
      L.marker([position.lat, position.lng], { icon: DefaultIcon }).addTo(mapInstance.current);
      L.polyline(path, { color: 'blue' }).addTo(mapInstance.current);
    }
  }, [position, path]);

  return (
    <div className={styles.mapContainer}>
      <div ref={mapRef} className={styles.map} />
    </div>
  );
};

export default MapLocation;
