import React from 'react';
import snake from './snake.svg';
import './App.css';
import { getData } from './utils/dataapi';

//  "https://api.github.com";

function App() {
  const [userData, setUserData] = React.useState(null);
  
  const Username = "trishtracking";
  React.useEffect(() => {
    const url = `https://api.github.com/users/${Username}`
    getData(url).then((data) => setUserData(data));
  }, []);
  if (!userData) {
    return <h3>.....Snake Loading</h3>
  }


  return (
    <div className="App">
      <header className="App-header">
        <div id="logoid">
          <img src={snake} alt="Picture of snake logo" width="250em" height="250em"/>
        </div>
      </header>
      <main> 
        
        <section id="profile-card">
          <img id="avatar" src="avatar-from-api"/>
          <h1 id="name">namevariable</h1> 
          <fieldset>
            <label forhtml='githubId' name='githubId'></label>
            <input type="textarea" placeholder="Enter your GitHub ID"/>
            <button type="submit">Snake Me!</button>
          </fieldset>
        </section>
        <div className="snake-container">
        <div className="grid">snake grid bits</div>
      </div>

        </main>

    </div>
  );
}

export default App;


