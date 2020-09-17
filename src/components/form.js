import React from "react";
import "../App.css";

const FormSection = ({ setUserInput }) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        return setUserInput(event.target.username.value);
      }}
    >
      <label forhtml="githubId" name="githubId"></label>
      {/* {onchange} run handleSearch which targets the input value */}
      <input
        id="username"
        name="username"
        type="textarea"
        placeholder="Enter your GitHub ID"
      />
      <button type="submit" id="submit">
        React is my snack
      </button>
    </form>
  );
};

export default FormSection;
