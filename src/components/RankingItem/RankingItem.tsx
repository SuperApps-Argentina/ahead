import styles from './styles/RankingItem.module.css';

interface RankingItemProps {
  name: string;
  score: string;
  avatar: string;
  position: number;
}

const RankingItem: React.FC<RankingItemProps> = ({ name, score, avatar, position }) => {
  return (
    <div className={styles.item}>
      <div className={styles.position}>#{position}</div>
      <img src={avatar} alt={`${name}'s avatar`} className={styles.avatar} />
      <div className={styles.name}>{name}</div>
      <div className={styles.score}>{score}</div>
    </div>
  );
};

export default RankingItem;