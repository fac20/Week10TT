import React from "react";
import snake from "./images/snake.svg";
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
          <img src={snake} className="app__logo" alt="snake logo" />
        </div>
      </header>
      <main>
        {!userInput && <FormSection setUserInput={setUserInput} />}

        {/*It works because in JavaScript, true && expression always evaluates to expression, 
        and false && expression always evaluates to false. Therefore, if the condition is true, 
        the element right after && will appear in the output. If it is false, 
        React will ignore and skip it.*/}

        {userInput ? (
          <User
            userInput={userInput}
            userData={userData}
            setUserData={setUserData}
          />
        ) : null}

        {userData ? (
          <div className="Container">
            <SnakeGrid face={userData.avatar_url} />
          </div>
        ) : null}
      </main>
    </div>
  );
}

export default App;
