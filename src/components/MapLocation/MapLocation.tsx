import { MdLocationOn } from 'react-icons/md'; // Importa el ícono
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './MapLocation.module.css';

interface MapLocationProps {
  position: { lat: number; lng: number } | null;
  path: { lat: number; lng: number }[];
  onToggleTracking: () => void;
  isTracking: boolean;
}

const MapLocation: React.FC<MapLocationProps> = ({ position, path, onToggleTracking, isTracking }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<L.Map | null>(null);

  const DefaultIcon = L.icon({
    iconUrl: 'ahead/src/img/285659_marker_map_icon.png', // Reemplazar con el ícono que desees
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  useEffect(() => {
    if (mapRef.current) {
      mapInstance.current = L.map(mapRef.current).setView([0, 0], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
      }).addTo(mapInstance.current);

      // Agregar la línea azul al mapa
      L.polyline(path, { color: 'blue', weight: 4 }).addTo(mapInstance.current);

      return () => {
        mapInstance.current?.remove();
      };
    }
  }, []);

  useEffect(() => {
    if (mapInstance.current && position) {
      mapInstance.current.setView([position.lat, position.lng], 13);
      L.marker([position.lat, position.lng], { icon: DefaultIcon }).addTo(mapInstance.current);

      // Agregar marcadores personalizados (X) en el camino
      path.forEach((point) => {
        L.marker([point.lat, point.lng], { icon: DefaultIcon }).addTo(mapInstance.current!);
      });

      // Volver a dibujar la línea azul
      L.polyline(path, { color: 'blue', weight: 4 }).addTo(mapInstance.current);
    }
  }, [position, path]);

  return (
    <div className={styles.mapContainer}>
      <h1 className={styles.title}>Map</h1>
      <div ref={mapRef} className={styles.map} />
      <button className={styles.button} onClick={onToggleTracking}>
        <MdLocationOn size={24} color="white" />
      </button>
    </div>
  );
};

export default MapLocation;
