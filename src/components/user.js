import React from "react";
import "../App.css";
import getData from "../utils/dataapi.js";
import loading from "../snake-game-logo.png";

const User = (props) => {
  // const [userInput, setUserInput] = React.useState("");
  React.useEffect(() => {
    getData(props.userInput).then((data) => {
      return props.setUserData(data);
    }, []);
  });

  if (!props.userData) {
    return <img alt="Original snake logo easter egg" src={loading} />;
  }
  console.log(props.userData);
  console.log(props.userData.avatar_url);
  return (
    <section id="profile-card">
      <img
        id="avatar"
        alt="Githib user avatar"
        src={props.userData.avatar_url}
      />
      <h1 id="name">Hungry, {props.userData.login}?</h1>
      <p>Use your arrow keys to get that tasty React</p>
    </section>
  );
};

export default User;
