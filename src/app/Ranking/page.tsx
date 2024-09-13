// pages/ranking.tsx
import { GetServerSideProps } from 'next';
import { useState } from 'react';
import RankingList from '../../components/RankingList/RankingList';
import RankingSwitch from '../../components/RankingSwitch/RankingSwitch';
import styles from '../styles/Ranking.module.css';
import Image from 'next/image';

// Datos simulados (puedes reemplazarlos con una llamada a una API)
const dailyRanking = [
  { name: 'Fabian', score: '46.896', avatar: '/fabian.png' },
  { name: 'Patricia', score: '46.722', avatar: '/patricia.png' },
  { name: 'Irene', score: '46.652', avatar: '/irene.png' },
  { name: 'Kevin', score: '5.645', avatar: '/kevin.png' },
  { name: 'Goyo', score: '5.643', avatar: '/goyo.png' },
  // Otros usuarios...
];

const globalRanking = [
  { name: 'Fabian', score: '150.896', avatar: '/fabian.png' },
  { name: 'Patricia', score: '140.722', avatar: '/patricia.png' },
  { name: 'Irene', score: '136.652', avatar: '/irene.png' },
  { name: 'Kevin', score: '55.645', avatar: '/kevin.png' },
  { name: 'Goyo', score: '45.643', avatar: '/goyo.png' },
  // Otros usuarios...
];

const RankingPage = () => {
  const [view, setView] = useState<'daily' | 'global'>('daily');

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Ranking</h1>
      <RankingSwitch view={view} setView={setView} />
      <RankingList users={view === 'daily' ? dailyRanking : globalRanking} />
    </div>
  );
};

// Protegemos la ruta
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;
  const user = await checkAuth(req); // Reemplaza con tu lógica de autenticación
  
  if (!user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {}, // Puedes pasar datos adicionales aquí si es necesario
  };
};

export default RankingPage;
