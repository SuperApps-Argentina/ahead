import styles from './RankingCard.module.css';

interface RankingCardProps {
  name: string;
  score: string;
  avatar: string;
  position: number;
}

const RankingCard: React.FC<RankingCardProps> = ({ name, score, avatar, position }) => {
  return (
    <div className={styles.card}>
      <div className={styles.position}>#{position}</div>
      <img src={avatar} alt={`${name}'s avatar`} className={styles.avatar} />
      <div className={styles.details}>
        <div className={styles.name}>{name}</div>
        <div className={styles.score}>{score}</div>
      </div>
    </div>
  );
};

export default RankingCard;
