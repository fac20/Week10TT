import React from "react";
import snake from "./snake.svg";
import FormSection from "./components/form";
import User from "./components/user";
import { SnakeGrid } from "./components/snakegrid";
import "./App.css";
import { getData } from "./utils/dataapi";

//  "https://api.github.com";

function App() {
  const [userInput, setUserInput] = React.useState("");

  // >>> tutorial with time stamp https://youtu.be/aGiPMygfMM4?t=796
  // const handleSubmit = () => {};

  return (
    <div className="App">
      <header className="App-header">
        <div id="logoid">
          <img
            src={snake}
            alt="Picture of snake logo"
            width="250em"
            height="250em"
          />
        </div>
      </header>
      <main>
        <FormSection setUserInput={setUserInput} />
        {userInput ? <User userInput={userInput} /> : null};
        <div className="snake-container">
          <div className="grid">
            <SnakeGrid />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
