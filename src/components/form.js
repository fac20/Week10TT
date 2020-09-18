import React from "react";

const FormSection = ({ setUserInput }) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        return setUserInput(event.target.username.value);
      }}
    >
      <label
        forhtml="githubId"
        name="githubId"
        aria-label="enter your githubId to activate snake game"
      ></label>
      {/* {onchange} run handleSearch which targets the input value */}
      <input
        id="username"
        label="Github Username"
        name="username"
        type="textarea"
        placeholder="Enter your GitHub ID"
      />
      <button name="submit" type="submit" id="submit">
        React is my snack
      </button>
    </form>
  );
};

export default FormSection;
