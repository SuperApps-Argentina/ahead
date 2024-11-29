'use client';
import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import L from 'leaflet';
import Style from './map.module.css';
import ReactDOMServer from 'react-dom/server';

const Map = () => {
  const [map, setMap] = useState<L.Map | null>(null);
  const [markers, setMarkers] = useState<L.Marker<any>[]>([]); // Cambiar a una lista de marcadores
  const [circles, setCircles] = useState<L.Circle<any>[]>([]); // Cambiar a una lista de círculos
  const [isTracking, setIsTracking] = useState<boolean>(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (map !== null) return;

      const mapElement = document.getElementById('map');
      if (!mapElement) return;

      import('leaflet').then((L) => {
        const mapInstance = L.map('map').setView([0, 0], 1);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(mapInstance);

        setMap(mapInstance);

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            mapInstance.setView([latitude, longitude], 5);
          });
        }

        return () => {
          mapInstance.remove();
        };
      });
    }
  }, [map]);

  const getPosition = (position: GeolocationPosition) => {
    const { latitude, longitude, accuracy } = position.coords;

    if (map) {
      // Crear un nuevo marcador y círculo
      const iconHtml = ReactDOMServer.renderToString(<FaMapMarkerAlt style={{ fontSize: '24px', color: 'blue' }} />);
      const newMarker = L.marker([latitude, longitude], { icon: L.divIcon({ html: iconHtml, className: 'my-custom-icon' }) }).addTo(map);
      const newCircle = L.circle([latitude, longitude], { radius: accuracy }).addTo(map);

      setMarkers((prev) => [...prev, newMarker]); // Agregar el nuevo marcador a la lista
      setCircles((prev) => [...prev, newCircle]); // Agregar el nuevo círculo a la lista

      const featureGroup = L.featureGroup([newMarker, newCircle]).addTo(map);
      map.fitBounds(featureGroup.getBounds());

      console.log(`Latitud: ${latitude}, Longitud: ${longitude}, Precisión: ${accuracy}`);
    }
  };

  const cleanUp = () => {
    // Eliminar todos los marcadores y círculos
    markers.forEach(marker => {
      map?.removeLayer(marker);
    });
    circles.forEach(circle => {
      map?.removeLayer(circle);
    });

    // Limpiar los estados
    setMarkers([]);
    setCircles([]);
  };

  const toggleTracking = () => {
    if (!isTracking) {
      setIsTracking(true);
      if (navigator.geolocation) {
        const newInterval = setInterval(() => {
          navigator.geolocation.getCurrentPosition(getPosition, (error) => {
            console.error(error); // Manejo de errores si no se puede obtener la posición
          });
        }, 4000);
        setIntervalId(newInterval);
      }
    } else {
      setIsTracking(false);
      if (intervalId) {
        clearInterval(intervalId); // Limpiar el intervalo
        setIntervalId(null);
      }
      cleanUp(); // Limpiar todos los marcadores y círculos al detener el seguimiento

      // Limpiar la consola (opcional)
      console.clear(); // Esta línea limpia la consola
    }
  };

  return (
    <div>
      <div id="map" className={Style.containerMap}></div>
      <button onClick={toggleTracking} className={Style.trackButton}>
        {isTracking ? 'Detener Seguimiento' : 'Iniciar Seguimiento'}
      </button>
    </div>
  );
};

export default Map;