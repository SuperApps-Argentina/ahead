import React from "react";


import { FaCaretUp, FaCaretDown, FaDotCircle } from "react-icons/fa";

import styles from "./DailyProgress.module.css";

interface DailyProgressProps {
  objective: number;
  distance: number;
}

const DailyProgress: React.FC<DailyProgressProps> = ({ objective, distance }) => {

  const validObjective = objective ?? 5.000;

  const validDistance = distance ?? 5.564;

  const hasReachedObjective = validDistance >= validObjective;

  const difference = validDistance - validObjective;

  return (
    <div className={styles.containerDaily}>
      
      <div className={styles.containerDailyHoy}>
        
        <h4 className={styles.titleHoy}>
          <FaDotCircle style={{ color: "#828bfdff" }} /> Hoy
        </h4>
        
        <h4 className={styles.metrosHoy}>
          {validDistance.toLocaleString()} m
        </h4>
      </div>
      
      <div className={styles.containerDivisor}></div> 
      
      <div className={styles.dailyObjetivoDiario}>
        
        <h4 className={styles.objetivoDiario}>
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
