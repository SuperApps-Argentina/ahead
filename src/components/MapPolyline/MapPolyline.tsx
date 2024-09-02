import React from "react";
import { Polyline } from "react-leaflet";

interface MapPolylineProops {
    positions: { lat: number; lng: number }[];
    color?: string;
}

const MapPolyline:React.FC<MapPolylineProops> = ({ positions, color = 'blue' }) => {
    return <Polyline positions={positions.map(pos => [pos.lat, pos.lng])} color={color} />
};

export default MapPolyline