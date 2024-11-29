import React from 'react';
import { FaRegUserCircle } from "react-icons/fa"; // Importa el icono
import styles from './RankingList.module.css';

interface User {
  name: string;
  score: string;
  imgSrc?: string; // Hacemos que imgSrc sea opcional
  rank: number;
}

interface RankingListProps {
  otherUsers: User[];
}

const RankingList: React.FC<RankingListProps> = ({ otherUsers }) => {
  return (
    <div className={styles.containerRanking}>
      <div className={styles.otherUsers}>
        {otherUsers.map((user, index) => (
          <div
            key={user.rank}
            className={`${styles.otherUser} ${index % 2 === 1 ? styles.alternate : ''}`} // Aplicar fondo violeta a filas alternas
          >
            <span className={styles.userRank}>{user.rank}</span>
            
            {/* Mostrar imagen si existe, si no, mostrar el icono */}
            {user.imgSrc ? (
              <img src={user.imgSrc} alt={`${user.name}'s profile`} className={styles.userImage} />
            ) : (
              <FaRegUserCircle className={styles.userIcon} />
            )}
            
            <div className={styles.userInfo}>
              <span className={styles.userName}>{user.name}</span>
            </div>
            <span className={styles.userKm}>{user.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RankingList;
