//src\components\TopThreeRanking\TopThreeRanking.tsx
import Image from 'next/image';
import styles from './TopThreeRanking.module.css';

interface User {
  name: string;
  score: number;
  imageUrl: string;
  rank: number;
  gradient: string;  // Nuevo campo para el gradiente
}

interface TopThreeRankingProps {
  users: User[];
}

const TopThreeRanking: React.FC<TopThreeRankingProps> = ({ users }) => {
  // Ordenamos los usuarios por puntaje
  const sortedUsers = users.sort((a, b) => b.score - a.score);

  return (
    <div className={styles.topThreeContainer}>
      <div className={styles.topThree}>
        {sortedUsers.map((user, index) => (
          <div key={index} className={styles.userAvatar} style={{ zIndex: 3 - index }}>
            <div
              className={`${styles.userImage} ${index === 0 ? styles.crown : ''}`}
              style={{ background: user.gradient }}  // Aplicamos el gradiente dinámico aquí
            >
              <Image
                src={"https://www.clarin.com/img/2024/01/11/7AaLezyS4_600x600__1.jpg"}
                alt={user.name}
                width={100}
                height={100}
                className={styles.image}
              />
            </div>
            <div className={styles.userInfo}>
              <h3>{user.name}</h3>
              <p>#{user.score.toFixed(3)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopThreeRanking;
