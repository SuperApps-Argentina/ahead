import React from 'react';
import { AiFillCaretUp, AiFillCaretDown, AiOutlineMinus } from "react-icons/ai";
import styles from './Ranking.module.css';

interface RankingProps {
  position: number;
  change: 'Increase' | 'Decrease' | 'Equal';
}

export const Ranking: React.FC<RankingProps> = ({ position, change }) => {
  const renderIcon = () => {
    switch (change) {
      case 'Increase'://poner en ingles 
        return <AiFillCaretUp />;
      case 'Decrease':
        return <AiFillCaretDown />;
      case 'Equal':
        return <AiOutlineMinus />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.icon}>
          {renderIcon()}
        </div>
        <div className={styles.number}>
          <h5>#{position.toLocaleString()}</h5>
        </div>
      </div>
    </div>
  );
}

export default Ranking;
