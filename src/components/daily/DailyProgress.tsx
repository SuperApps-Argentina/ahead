import React from "react";
// Importamos React para utilizar TSX y componentes funcionales

import { FaCaretUp, FaCaretDown, FaDotCircle } from "react-icons/fa";
// Importamos los íconos que vamos a utilizar desde react-icons/fa

import styles from "./DailyProgress.module.css";
// Importamos los estilos CSS para el componente desde un archivo CSS modular

interface DailyProgressProps {
  objective: number;
  distance: number;
}
// Definimos la interfaz TypeScript para las props que el componente espera recibir

const DailyProgress: React.FC<DailyProgressProps> = ({ objective, distance }) => {
  // Definimos el componente funcional DailyProgress que toma props de tipo DailyProgressProps

  const validObjective = objective ?? 5.000;
  // Si no se recibe el prop objective, usamos un valor por defecto de 5000

  const validDistance = distance ?? 5.564;
  // Si no se recibe el prop distance, usamos un valor por defecto de 4564

  const hasReachedObjective = validDistance >= validObjective;
  // Determinamos si se ha alcanzado el objetivo comparando la distancia válida con el objetivo válido

  const difference = validDistance - validObjective;
  // Calculamos la diferencia entre la distancia válida y el objetivo válido

  return (
    // Retornamos el TSX que define la estructura del componente
    <div className={styles.containerDaily}>
      {/* Contenedor principal con estilos aplicados desde el CSS modular */}
      
      <div className={styles.containerDailyHoy}>
        {/* Contenedor para la sección de "Hoy" */}
        
        <h4 className={styles.titleHoy}>
          {/* Título de la sección "Hoy" */}
          <FaDotCircle style={{ color: "#828bfdff" }} /> Hoy
          {/* Ícono de círculo seguido de la palabra "Hoy" */}
        </h4>
        
        <h4 className={styles.metrosHoy}>
          {/* Texto que muestra la distancia recorrida hoy */}
          {validDistance.toLocaleString()} m
          {/* Convertimos la distancia válida a un string con formato local seguido de "m" */}
        </h4>
      </div>
      
      <div className={styles.containerDivisor}></div> 
      {/* Divisor entre las secciones */}
      
      <div className={styles.dailyObjetivoDiario}>
        {/* Contenedor para la sección de "Objetivo diario" */}
        
        <h4 className={styles.objetivoDiario}>
          {/* Título de la sección "Objetivo diario" */}
          Objetivo diario: {validObjective.toLocaleString()} m
          {/* Mostramos el objetivo diario convertido a un string con formato local seguido de "m" */}
        </h4>
        
        <div className={styles.achievement}>
          {/* Contenedor para mostrar si se ha alcanzado el objetivo y la diferencia */}
          
          {hasReachedObjective ? (
            <FaCaretUp className={styles.icon} style={{ color: 'green' }} />
            ) : (
            <FaCaretDown className={styles.icon} style={{ color: 'red' }} />
          )}
          {/* Mostramos un ícono hacia arriba si se ha alcanzado el objetivo, o un ícono hacia abajo si no */}
          
          <span className={`${styles.difference} ${hasReachedObjective ? styles.green : styles.red}`}>
            {/* Span para mostrar la diferencia en color verde o rojo dependiendo de si se alcanzó el objetivo */}
            {difference.toLocaleString()} m
            {/* Mostramos la diferencia convertida a un string con formato local seguido de "m" */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DailyProgress;
// Exportamos el componente DailyProgress como exportación por defecto
