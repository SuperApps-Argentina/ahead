import React from 'react';
import styles from './RankingList.module.css';

interface User {
  name: string;
  score: string;
  imgSrc: string;
  rank: number;
}

interface RankingListProps {
  otherUsers: User[];
}

const RankingList: React.FC<RankingListProps> = ({ otherUsers }) => {
  return (
    <div className={styles.containeRanking}>
<div className={styles.otherUsers}>
      {otherUsers.map((user, index) => (
        <div
          key={user.rank}
          className={`${styles.otherUser} ${index % 2 === 1 ? styles.alternate : ''}`} // Aplicar fondo violeta a filas alternas
        >
          <span className={styles.userRank}>{user.rank}</span>
          <img
            src={user.imgSrc || '../img/avatarDefaultIMG.svg'}
            alt={`${user.name}'s profile`}
            className={styles.userImage}
          />
          <div className={styles.userInfo}>
            <span className={styles.userName}>{user.name}</span>
          </div>
          <span className={styles.userKm}>{user.score} </span>
        </div>
      ))}
    </div>
    </div>
    
  );
};

export default RankingList;
