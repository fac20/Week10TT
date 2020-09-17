import React, { useEffect } from "react";
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
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height),
    };
    return position;
  };

  const [rows, setRows] = useState(initialRows);
  const [snake, setSnake] = useState([
    { x: 0, y: 0 },
    { x: 1, y: 0 },
  ]);
  const [direct, setDirection] = useState("right");
  const [apple, setApple] = useState(randomPosition);

  const changeDirectionWithKeys = (e) => {
    const { keyCode } = e;
    switch (keyCode) {
      case 37:
        setDirection("left");
        break;
      case 38:
        setDirection("top");
        break;
      case 39:
        setDirection("right");
        break;
      case 40:
        setDirection("bottom");
        break;
      default:
        break;
    }
  };

  document.addEventListener("keydown", changeDirectionWithKeys, false);

  const displaySnake = () => {
    const newRows = initialRows;
    snake.forEach((cell) => {
      newRows[cell.x][cell.y] = "snake";
    });
    newRows[apple.x][apple.y] = "apple";
    setRows(newRows);
  };

  const moveSnake = () => {
    const newSnake = [];
    switch (direction) {
      case "right":
        newSnake.push({ x: snake[0].x, y: (snake[0].y + 1) % width }); // adds 1 to y coord, moves right
        break;
      case "left":
        newSnake.push({ x: snake[0].x, y: (snake[0].y - 1 + width) % width }); //subtracts 1 from y coord, moves left
        break;
      case "top":
        newSnake.push({ x: (snake[0].x - 1 + height) % height, y: snake[0].y }); //
        break;
      case "bottom":
        newSnake.push({ x: (snake[0].x + 1) % height, y: snake[0].y });
    }
    snewSnake.forEach((cell) => {
      newSnake.push(cell);
    });
    if (snake[0].x === apple.x && snake[0].y === apple.y) {
      //checks if snake is eating apple
      setApple(randomPosition); // if so, move apple
    } else {
      newSnake.pop(); //removes last element in snake array and returns trimmed array
    }
    setSnake(newSnake);
    displaySnake();
  };

  useInterval(moveSnake, 100); // npm package that sets delay before callback

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up interval - setInterval may need importing
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  const displayRows = rows.map((row) => (
    <li>
      {row.map((e) => {
        switch (e) {
          case "blank":
            return <img src={Blank} />;
          case "snake":
            return <img src={userData.avatar_url} />;
          case "apple":
            return <span>a</span>;
        }
      })}
    </li>
  ));

  return (
    <div>
      <ul>{displayRows}</ul>
    </div>
  );
};

export { SnakeGrid };
