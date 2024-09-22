import React from 'react';
import Styles from './Header.module.css';
import { TfiCup } from 'react-icons/tfi';
import { IoIosArrowBack } from 'react-icons/io';
import { useRouter } from 'next/navigation'; // Importa useRouter

export const Header = () => {
  const router = useRouter(); // Crea una instancia de useRouter

  const handleBackClick = () => {
    router.back(); // Navega a la página anterior
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.arrow} onClick={handleBackClick}> 
        <IoIosArrowBack /> 
      </div>
      <div className={Styles.containerTitle}>
        <TfiCup /> Ranking
      </div>
      <div></div>
    </div>
  );
};
