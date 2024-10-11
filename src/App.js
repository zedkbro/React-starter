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
            <ToggleAuth />
          </a>
        </header>

        <div>
          <form onSumbit="" className="login-form">
            <input type="text" />
            <input type="text" />
            <input type="submit" value="Submit" id="submit" />
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
