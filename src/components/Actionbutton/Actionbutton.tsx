"use client";

import React from 'react';
import styles from '../Actionbutton/ActionButton.module.css';

interface ActionButtonProps {
  icon: React.ReactNode;
  size: 'small' | 'large';
  onClick: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ icon, size, onClick }) => {
  const buttonSizeClass = size === 'small' ? styles.small : styles.large;

  return (
    <button
      className={`${styles.actionButton} ${buttonSizeClass}`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default ActionButton;
