import React from "react";
import User from "./user.js";
import "./App.css";

const SnakeGrid = () => {


  const height = 15;
  const width = 15;
  let initialRows = [];
  for (let i = 0; i < height; i++) {
    initialRows.push([]);
    for (let k = 0; k < width; k++) {
      initialRows[i].pusk("blank");
    }
  }

  const randomPosition = () => {
    const position = {
      x: Math.floor(Math.random()*width),
      y: Math.floor(Math.random()*height)};
      return position; 
    }

    const [rows, setRows] = useState(initialRows);
    const [snake, setSnake] = useState([{x:0,y:0},{x:1,y:0}]);
    const [direct, setDirection] = useState('right'); 
    const [apple, setApple] = useState(randomPosition); 

    const changeDirectionWithKeys = (e) => {
      const { keyCode } = e;
      switch(keyCode) {
        case 37: 
        setDirection('left');
        break; 
        case 38:
          setDirection('top');
          break;
          case 39:
            setDirection('right');
            break; 
            case 40;
            setDirection('bottom');
            break; 
            default:
              break; 
      }
    }

    document.addEventListener("keydown", changeDirectionWithKeys, false);

  }

  return (
    <div>
      <ul>{displayRows}</ul>
    </div>
  );
};

export { SnakeGrid };
