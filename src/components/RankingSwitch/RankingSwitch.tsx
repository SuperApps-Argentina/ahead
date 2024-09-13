import styles from './styles/RankingSwitch.module.css';

interface RankingSwitchProps {
  view: 'daily' | 'global';
  setView: (view: 'daily' | 'global') => void;
}

const RankingSwitch: React.FC<RankingSwitchProps> = ({ view, setView }) => {
  return (
    <div className={styles.switch}>
      <button
        className={`${styles.button} ${view === 'daily' ? styles.active : ''}`}
        onClick={() => setView('daily')}
      >
        Hoy
      </button>
      <button
        className={`${styles.button} ${view === 'global' ? styles.active : ''}`}
        onClick={() => setView('global')}
      >
        Total
      </button>
    </div>
  );
};

export default RankingSwitch;