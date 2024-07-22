"use client";
import ActionButton from "../components/Actionbutton/Actionbutton";
import { FaBiking, FaUser, FaTrophy } from 'react-icons/fa';

const Home: React.FC = () => {
  const handleProfileClick = () => {
    console.log('Perfil');
  };

  const handleStartBikeClick = () => {
    console.log('Inicio de trayecto de bici');
  };

  const handleTop10Click = () => {
    console.log('Top 10');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <div className="flex space-x-8">
        <ActionButton
          icon={<FaUser />}
          size="small"
          onClick={handleProfileClick}
        />
        <ActionButton
          icon={<FaBiking />}
          size="large"
          onClick={handleStartBikeClick}
        />
        <ActionButton
          icon={<FaTrophy />}
          size="small"
          onClick={handleTop10Click}
        />
      </div>
    </main>
  );
};

export default Home;
