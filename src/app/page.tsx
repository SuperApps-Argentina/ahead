'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { SignInForm } from "@/components/SignInForm/SignInForm";
import Ranking from "../components/Ranking/Ranking";
import Avatar from "@/components/Avatar/Avatar";
import ActionButton from "../components/Actionbutton/Actionbutton";
import { FaBiking, FaUser, FaTrophy } from 'react-icons/fa';
import LevelProgress from "@/components/LevelProgress/LevelProgress";
import styles from '../components/Actionbutton/ActionButton.module.css';
import DailyProgress from "@/components/Daily/DailyProgress";
import Logout from "@/components/Logout/Logout";

const Home: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [loading, setLoading] = useState(true); // Añadimos un estado de carga

  // Verifica si la sesión está lista, de lo contrario, muestra el login
  useEffect(() => {
    if (status === 'loading') {
      return; // Solo espera si está cargando
    }

    if (status === 'unauthenticated') {
      setLoading(false); // Si no está autenticado, muestra el login
    } else {
      setLoading(false); // Si está autenticado, muestra la página principal
    }
  }, [status]);

  if (loading) {
    return null; // No renderizamos nada mientras verificamos la sesión
  }

  if (status === 'unauthenticated') {
    return <SignInForm />;
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
          onClick={() => console.log("Profile Clicked")}
        />
        <ActionButton
          icon={<FaBiking className={styles.IconLarge} />}
          size="large"
          onClick={() => console.log("Start Bike Clicked")}
        />
        <ActionButton
          icon={<FaTrophy className={styles.IconSmall} />}
          size="small"
          onClick={() => console.log("Top 10 Clicked")}
        />
      </div>
      <Logout />
    </main>
  );
};

export default Home;
