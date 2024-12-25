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
          <form className="login-form">
            <input type="text" />
            <input type="text" />
            <input type="submit" value="Submit" id="submit" />
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
