import RankingItem from '../../components/RankingItem/RankingItem';
import styles from './styles/RankingList.module.css';

interface User {
  name: string;
  score: string;
  avatar: string;
}

interface RankingListProps {
  users: User[];
}

const RankingList: React.FC<RankingListProps> = ({ users }) => {
  return (
    <div className={styles.list}>
      {users.map((user, index) => (
        <RankingItem key={user.name} position={index + 1} {...user} />
      ))}
    </div>
  );
};

export default RankingList;
