import React from "react";
import "../index.css";
import getData from "../utils/dataapi.js";

const User = (props) => {
  const [userData, setUserData] = React.useState(null);
  // const [userInput, setUserInput] = React.useState("");
  React.useEffect(() => {
    getData(props.userInput).then((data) => {
      return setUserData(data);
    }, []);
  });

  if (!userData) {
    return <h3>.....Snake Loading🍎 🐍</h3>;
  }
  console.log(userData);
  return (
    <section id="profile-card">
      <img id="avatar" src={userData.avatar_url} />
      <h1 id="name">{userData.login}</h1>
    </section>
  );
};

export default User;
