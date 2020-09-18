/* eslint-disable default-case */
import React from "react";
import ReactLogo from "../react.png";
import Blank from "../blank.png";

const SnakeGrid = (props) => {
  const height = 12;
  const width = 12;
  let initialRows = [];
  for (let i = 0; i < height; i++) {
    initialRows.push([]);
    for (let k = 0; k < width; k++) {
      initialRows[i].push("blank");
    }
  }

  const randomPosition = () => {
    const position = {
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height),
    };
    return position;
  };

  const [rows, setRows] = React.useState(initialRows);
  const [snake, setSnake] = React.useState([
    { x: 0, y: 0 },
    { x: 1, y: 0 },
  ]);
  const [direction, setDirection] = React.useState("right");
  const [reactlogo, setReactlogo] = React.useState(randomPosition);

  const changeDirectionWithKeys = (e) => {
    e.preventDefault();
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
    newRows[reactlogo.x][reactlogo.y] = "reactlogo";
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
    snake.forEach((cell) => {
      newSnake.push(cell);
    });
    if (snake[0].x === reactlogo.x && snake[0].y === reactlogo.y) {
      //checks if snake is eating reactlogo
      setReactlogo(randomPosition); // if so, move reactlogo and put it somewhere else
    } else {
      newSnake.pop(); //removes last element in snake array and returns trimmed array
    }
    setSnake(newSnake);
    displaySnake();
  };

  useInterval(moveSnake, 100); // npm package that sets delay before callback

  // Set up interval - imported setInterval for this
  function useInterval(callback, delay) {
    const savedCallback = React.useRef();

    React.useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    //tick function runs every 100ms,
    //take the current direction of the motion, and then will move the snake’s head in that direction
    React.useEffect(() => {
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
        // eslint-disable-next-line default-case
        switch (e) {
          case "blank":
            return <img className="blank__sq" alt="" src={Blank} />;
          case "snake":
            return (
              <img
                alt="github avatar"
                className="snakey__snake"
                src={props.face}
              />
            );
          case "reactlogo":
            return (
              <img className="snake__food" alt="react logo" src={ReactLogo} />
            );
        }
      })}
    </li>
  ));

  return (
    <div className="playContainer">
      <ul>{displayRows}</ul>
    </div>
  );
};

export { SnakeGrid };
