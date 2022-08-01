import { useState } from "react";
import { LOGIN } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [login] = useMutation(LOGIN);

  // ADD NOTIFICATION WHEN INCORRECT CREDENTIALS
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await login({
      variables: {
        username,
        password,
      },
    });
    Auth.login(data.login.token);
  };

  return (
    <div className="center container my-login">
      <form onSubmit={handleSubmit}>
        <h1 className="loginHeader">Login</h1>
        <input
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          type="text"
          required
        />
        <input
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          required
        />
        <button type="submit">Log In</button>
        <Link to="/signup" className="button">
          Signup
        </Link>
      </form>
    </div>
  );
};

export default Login;
