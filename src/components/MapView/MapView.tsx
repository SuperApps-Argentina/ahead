import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

interface MapViewProps {
    center: [number, number];
    zoom: number;
    children?: React.ReactNode;
}

const MapView: React.FC<MapViewProps> = ({ center, zoom, children }) => {
    return (
        <MapContainer center={center} zoom={zoom} style={{ height: '100vh', width: '100%' }}>
            <TileLayer
                url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
            />
            {children}
        </MapContainer>
    );
};

export default MapView