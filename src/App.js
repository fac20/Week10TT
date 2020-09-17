import React from 'react';
import snake from './snake.svg';
import './App.css';
import { getData } from './utils/dataapi';

//  "https://api.github.com";

function App() {
  const [userData, setUserData] = React.useState(null);
  const [userInput, setUserInput] = React.useState('');
  
  // const username = "trishtracking"; << hardcoded username for api string now changed to userInput from the form
  React.useEffect(() => {
    const url = `https://api.github.com/users/${userInput}`
    getData(url).then((data) => setUserData(data));
  }, []);
  if (!userData) {
    return <h3>.....Snake Loading</h3>
  }

  // Targets the value inputted into the search field
  const handleSearch = (event) => {
    setUserInput(event.target.value)
  };
 // Need to handle the submit to trigger a fetch request  >>> tutorial with time stamp https://youtu.be/aGiPMygfMM4?t=796
  const handleSubmit = () => {

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
            {/* {onchange} run handleSearch which targets the input value */}
            <input type="textarea" placeholder="Enter your GitHub ID" onChange={handleSearch}/>
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


