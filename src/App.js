import React from "react";
import snake from "./snake.svg";
import FormSection from "./components/form";
import User from "./components/user";
import { SnakeGrid } from "./components/snakegrid";
import "./App.css";
// import { getData } from "./utils/dataapi";

//  "https://api.github.com";

function App() {
  const [userInput, setUserInput] = React.useState("");
  const [userData, setUserData] = React.useState(null);

  // >>> tutorial with time stamp https://youtu.be/aGiPMygfMM4?t=796
  // const handleSubmit = () => {};

  return (
    <div className="App">
      <header className="App-header">
        <div id="logoid">
          <img
            src={snake}
            className="app__logo"
            alt="snake logo"
            width="250em"
            height="250em"
          />
        </div>
      </header>
      <main>
        <FormSection setUserInput={setUserInput} />
        {userInput ? (
          <User
            userInput={userInput}
            userData={userData}
            setUserData={setUserData}
          />
        ) : null}

        <div id="Container">
          {userData ? <SnakeGrid face={userData.avatar_url} /> : null}
        </div>
      </main>
    </div>
  );
}

export default App;
