import React from 'react';
import styles from './LevelProgress.module.css';

interface LevelProgressProps {
  objetivo: number;
  distanciaActual: number;
}

const LevelProgress: React.FC<LevelProgressProps> = ({ objetivo, distanciaActual }) => {
  const porcentaje = (distanciaActual / objetivo) * 100;

  return (
    <div className={styles['level-container']}>
      <div className={styles.total}>
        <div className={styles.circle}></div> {/* Elemento para el círculo sin relleno */}
        <h1>Total</h1>
      </div>
      <div className={styles.metros}>
        <h6>{distanciaActual} m</h6>
      </div>
      <div className={styles.progress}>
        <div
          className={styles['progress-bar']}
          style={{
            width: `${porcentaje}%`,
          }}
        ></div>
      </div>
      <div className={styles['object-nivel']}>
        <p className={styles['object-nivel-p']}>
          Objetivo de nivel: {objetivo} m
        </p>
      </div>
    </div>
  );
};

export default LevelProgress;