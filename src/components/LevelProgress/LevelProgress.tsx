import React from 'react';
import styles from './LevelProgress.module.css';

interface LevelProgressProps {
  objetivo: number;
  distanciaActual: number;
}

const LevelProgress: React.FC<LevelProgressProps> = ({ objetivo, distanciaActual }) => {
  const porcentaje = (distanciaActual / objetivo) * 100;

  return (
    <div className={styles['levelContainer']}>
      <div className={styles.total}>
        <div className={styles.circle}></div> {}
        <h1>Total</h1>
      </div>
      <div className={styles.meters}>
        <h6>{distanciaActual} m</h6>
      </div>
      <div className={styles.progress}>
        <div
          className={styles['progressBar']}
          style={{
            width: `${porcentaje}%`,
          }}
        ></div>
      </div>
      <div className={styles['objectLevel']}>
        <p>
          Objetivo de nivel: {objetivo} m
        </p>
      </div>
    </div>
  );
};

export default LevelProgress;