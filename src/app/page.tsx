"use client";
import Ranking from "../components/Ranking/Ranking";
import Avatar from "@/components/Avatar/Avatar";
import ActionButton from "../components/Actionbutton/Actionbutton";
import { FaBiking, FaUser, FaTrophy } from 'react-icons/fa';
import LevelProgress from "@/components/LevelProgress/LevelProgress";
import styles from '../components/Actionbutton/ActionButton.module.css';
import DailyProgress from "@/components/Daily/DailyProgress";

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
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 ">
      <div className="container-profile">
      <Avatar imageUrl="https://i.pinimg.com/564x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg" level={18} />
      <Ranking position={46896} change="Increase" />
      </div>
      
      <DailyProgress objective={5000} distance={5564} /> 
      <LevelProgress objetivo={80.000} distanciaActual={75.214} />
       
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
