import React from 'react';
import { AiFillCaretUp, AiFillCaretDown, AiOutlineMinus } from "react-icons/ai";
import "./module-ranking.css";

interface RankingProps {
  position: number;
  change: 'Aumentar' | 'Disminuir' | 'Igual';
}

export const Ranking: React.FC<RankingProps> = ({ position, change }) => {
  const renderIcon = () => {
    switch (change) {
      case 'Aumentar'://poner en ingles 
        return <AiFillCaretUp />;
      case 'Disminuir':
        return <AiFillCaretDown />;
      case 'Igual':
        return <AiOutlineMinus />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="container-ranking">
        <div className="icon-ranking">
          {renderIcon()}
        </div>
        <div className="number-ranking">
          <h5>#{position.toLocaleString()}</h5>
        </div>
      </div>
    </div>
  );
}

export default Ranking;
