import React from "react";
import { Marker } from "react-leaflet";

interface MapMarkerProops {
    positions: { lat: number; lng: number }[];
}

const MapMarkers: React.FC<MapMarkerProops> = ({ positions }) => {
    return (
        <>
        {positions.map((pos, index) => (
            <Marker key={index} position={[pos.lat, pos.lng]} />
        ))}
        </>
    );
};

export default MapMarkers