// src\app\Map\page.tsx

'use client'
import GeolocationTracker from '../../components/GeolocationTracker/GeolocationTracker';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Aplicación de Seguimiento de Distancia</h1>
      <GeolocationTracker />
    </div>
  );
};

export default HomePage;
