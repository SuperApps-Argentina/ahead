"use client";
import ActionButton from "../components/Actionbutton/Actionbutton";
import { FaBiking, FaUser, FaTrophy } from 'react-icons/fa';
import styles from '../components/Actionbutton/ActionButton.module.css';

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
      <div className={styles.containerbuttons}>
        <ActionButton
          icon={<FaUser className={styles.IconSmall} />}
          size="small"
          onClick={handleProfileClick}
        />
        <ActionButton
          icon={<FaBiking className={styles.IconLarge} />}
          size="large"
          onClick={handleStartBikeClick}
        />
        <ActionButton 
          icon={<FaTrophy className={styles.IconSmall} />}
          size="small"
          onClick={handleTop10Click}
        />
      </div>
    </main>
  );
};

export default Home;
