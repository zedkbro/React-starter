import logo from "./logo.svg";
import "./App.css";

import Login from "./Login";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p></p>
          <a
            className="App-link"
            href="/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Login link="Signup" />
          </a>
        </header>

        <div>
          <form onSumbit="" className="login-form">
            <input type="text" />
            <input type="text" />
            <input type="submit" value="Submit" id="submit"/>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
