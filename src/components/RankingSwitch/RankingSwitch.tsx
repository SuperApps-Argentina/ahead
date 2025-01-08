// src/components/RankingSwitch/RankingSwitch.tsx
'use client';
'use client';
import React, { useState } from 'react';
import Styles from './RankingSwitch.module.css';
import { FaDotCircle } from 'react-icons/fa';

interface RankingSwitchProps {
  onSwitchChange: (isToday: boolean) => void; // Nueva prop para pasar el estado al componente padre
}

export const RankingSwitch: React.FC<RankingSwitchProps> = ({ onSwitchChange }) => {
  const [isToday, setIsToday] = useState(false);

  const handleSwitchChange = () => {
    const newIsToday = !isToday;
    setIsToday(newIsToday);
    onSwitchChange(newIsToday); // Pasamos el nuevo estado al componente padre
  };

  return (
    <div className={Styles.containerSwitch}>
      <label htmlFor="filter" className={Styles.switch} aria-label="Toggle Filter">
        <input
          type="checkbox"
          id="filter"
          checked={isToday}
          onChange={handleSwitchChange}
        />
        <span className={Styles.label}>Hoy</span>
        <span className={Styles.label}>Total</span>
        <div
          className={`${Styles.switchIndicator} ${
            isToday ? Styles.left : Styles.right
          }`}
        >
          <FaDotCircle style={{ color: "#828bfdff", fontSize: '1.2rem', marginLeft: '.5rem' }} />
        </div>
      </label>
    </div>
  );
};
