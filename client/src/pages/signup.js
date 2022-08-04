import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({ email: "", password: "", username: "" });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        username: formState.username,
      },
    });
    const token = mutationResponse.data.addUser.token;
    auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="center container my-1">
      <div id="returnBox">
        <Link 
          id="returnToLogin"
          to="/login"
        >
          ← Go to Login
        </Link>
      </div>
      <h2 
        id="signupTitle"
        className="signupHeader"
      >
        Signup
      </h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-signup1">
          <label htmlFor="username"> Username:</label>
          <input
            placeholder="Username"
            name="username"
            type="text"
            id="username"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-signup2">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button 
            id="signupSubmitBtn"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
