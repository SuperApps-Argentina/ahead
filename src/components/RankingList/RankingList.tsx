import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import styles from './RankingList.module.css';

interface User {
  name: string;
  score: string;
  imgSrc?: string;
  rank: number;
}

interface RankingListProps {
  otherUsers: User[];
  isToday: boolean; // Prop para recibir el estado desde el componente padre
}

const RankingList: React.FC<RankingListProps> = ({ otherUsers, isToday }) => {
  return (
    <div className={`${styles.containerRanking} ${isToday ? styles.today : styles.total}`}>
      <div className={styles.otherUsers}>
        {otherUsers.map((user, index) => (
          <div
            key={user.rank}
            className={`${styles.otherUser} ${index % 2 === 1 ? styles.alternate : ''}`}
          >
            <span className={styles.userRank}>{user.rank}</span>
            
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
