import logo from "./logo.svg";
import "./App.css";

import Login from "./Login";
import Signup from "./Signup";

const isAuth = false;
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

  if(isAuth){
    return <Login login="Login"/>
  }

  return <Signup/>
}

export default App;
