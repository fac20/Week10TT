import Username from "../App.js";

const checkResponse = (response) => {
  if (!response.ok) throw new Error(`Network error: ${response.status}`);
  return response.json();
};

export const getData = (username) => {
  return fetch(`https://api.github.com/users/${username}`)
    .then(checkResponse)
    .catch((err) => {
      throw new Error(`fetching user data failed ${err}`);
    });
};

// export const API_BASE = "https://api.github.com";

export default getData;
