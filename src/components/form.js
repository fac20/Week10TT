import React from "react";
import "../index.css";

const FormSection = ({ setUserInput }) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        return setUserInput(event.target.username.value);
      }}
    >
      <fieldset>
        <label forhtml="githubId" name="githubId"></label>
        {/* {onchange} run handleSearch which targets the input value */}
        <input
          id="username"
          name="username"
          type="textarea"
          placeholder="Enter your GitHub ID"
        />
        <button type="submit" id="submit">
          Snake Me!
        </button>
      </fieldset>
    </form>
  );
};

export default FormSection;
