import React, { useEffect, useRef } from 'react';

interface GoogleMapComponentProps {
  positions: { lat: number; lng: number }[];
}

const GoogleMapComponent: React.FC<GoogleMapComponentProps> = ({ positions }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.google) return;

    const map = new window.google.maps.Map(mapRef.current!, {
      center: positions[0] || { lat: 0, lng: 0 },
      zoom: 15,
    });

    positions.forEach((pos) => {
      new window.google.maps.Marker({
        position: pos,
        map: map,
      });
    });

    if (positions.length > 1) {
      new window.google.maps.Polyline({
        path: positions,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2,
        map: map,
      });
    }
  }, [positions]);

  return <div ref={mapRef} style={{ width: '100%', height: '100vh' }} />;
};

export default GoogleMapComponent;
