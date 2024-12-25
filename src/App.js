import { useState } from "react";

import logo from "./logo.svg";
import "./App.css";

import Login from "./Login";
import Signup from "./Signup";

const isAuth = false;
function ToggleAuth() {
  if (isAuth) {
    return <Login />;
  }
  return <Signup />;
}

function App() {
  const page = "Login component";
  const cars = ["Tesla", "Nexus", "Bugati"];
  const [username, setUsername] = useState("");
  function handleForm(event) {
    event.preventDefault();
    alert(username);
  }
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Login login={page} link="https://www.mit.edu" />
            <ToggleAuth />
          </a>
        </header>
        <div>
          <p>{username}</p>
          <form className="login-form" onSubmit={handleForm}>
            <label for="username">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label for="password">Password:</label>
            <input type="password" />
            <button type="submit" id="submit">
              Submit
            </button>
          </form>
        </div>

        <ul>
          <li>
            {cars.map((car) => {
              return car;
            })}
          </li>
        </ul>
      </div>
      <h1>{isAuth ? "ICON" : "Zed"}</h1>
    </>
  );
}

export default App;
