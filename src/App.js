import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./Login";

import styles from "./my-style.module.css";

const isAuth = true;

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <nav className={styles.bigred}>
            <ul
              style={{
                display: "flex flex-col",
                justifyContent: "center",
                gap: "24px",
              }}
            >
              {data &&
                data.slice(0, 10).map((item, i) => {
                  return <li key={i}>{item.title}</li>;
                })}
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <h1>{isAuth ? "Welcome Back!" : "Please Login"}</h1>
      </div>
    </BrowserRouter>
  );
}

export default App;
