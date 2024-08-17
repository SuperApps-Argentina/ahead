import React from "react";

import { FaCaretUp, FaCaretDown, FaDotCircle } from "react-icons/fa";

import styles from "./DailyProgress.module.css";

const DEFAULT_OBJECTIVE = 5.000;
const DEFAULT_DISTANCE = 5.564;

interface DailyProgressProps {
  objective: number;
  distance: number;
}

const DailyProgress: React.FC<DailyProgressProps> = ({ objective, distance }) => {

  const validObjective = objective ?? DEFAULT_OBJECTIVE;

  const validDistance = distance ?? DEFAULT_DISTANCE;

  const hasReachedObjective = validDistance >= validObjective;

  const difference = validDistance - validObjective;

  return (
    <div className={styles.containerDaily}>
      
      <div className={styles.containerDailyToday}>
        
        <h4 className={styles.titleToday}>
          <FaDotCircle style={{ color: "#828bfdff" }} /> Hoy
        </h4>
        
        <h4 className={styles.metersToday}>
          {validDistance.toLocaleString()} m
        </h4>
      </div>
      
      <div className={styles.containerDivider}></div> 
      
      <div className={styles.dailyObjective}>
        
        <h4 className={styles.dailyObjectiveHeader}>
          Objetivo diario: {validObjective.toLocaleString()} m
        </h4>
        
        <div className={styles.achievement}>
          
          {hasReachedObjective ? (
            <FaCaretUp className={styles.icon} style={{ color: 'green' }} />
            ) : (
            <FaCaretDown className={styles.icon} style={{ color: 'red' }} />
          )}
          
          <span className={`${styles.difference} ${hasReachedObjective ? styles.green : styles.red}`}>
            {difference.toLocaleString()} m
          </span>
        </div>
      </div>
    </div>
  );
};

export default DailyProgress;
