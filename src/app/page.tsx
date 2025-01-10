"use client";

import Ranking from "../components/Ranking/Ranking";
import Avatar from "@/components/Avatar/Avatar";
import ActionButton from "../components/Actionbutton/Actionbutton";
import { FaBiking, FaUser, FaTrophy } from 'react-icons/fa';
import LevelProgress from "@/components/LevelProgress/LevelProgress";
import styles from '../components/Actionbutton/ActionButton.module.css';
import DailyProgress from "@/components/Daily/DailyProgress";
import  Logout  from "@/components/Logout/Logout";
import { useSession } from "next-auth/react";
import { SignInForm } from "@/components/SignInForm/SignInForm";

const Home: React.FC = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    // Puedes agregar un cargador o algo para indicar que la sesión está cargando.
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    // Si no está autenticado, muestra el formulario de inicio de sesión.
    return <SignInForm />;
  }

  function handleProfileClick(): void {
    throw new Error("Function not implemented.");
  }

  function handleStartBikeClick(): void {
    throw new Error("Function not implemented.");
  }

  function handleTop10Click(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5">
      <div className="container-profile">
        <Avatar imageUrl="https://i.pinimg.com/564x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg" level={18} />
        <Ranking position={46896} change="Increase" />
      </div>

      <DailyProgress objective={5000} distance={5564} />
      <LevelProgress objetivo={80_000} distanciaActual={75_214} />

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
      <Logout />
    </main>
  );
};

export default Home;