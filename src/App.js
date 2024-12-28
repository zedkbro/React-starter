import { useState, useEffect, createContext, useContext, useRef } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./Login";

import styles from "./my-style.module.css";

const isAuth = true;

function App() {
  const cars = ["Tesla", "Nexus", "Bugatti"];
  const [form, setForm] = useState({});
  const [input, setInput] = useState("");
  const inputElement = useRef("");

  function handleForm(event) {
    event.preventDefault();
    alert(`Username: ${form.username}`);
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }
  let [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    inputElement.current = input;
  }, [input]); // <- add the input variable here

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>{count}</h1>
          {/* <p style={{ color: "red", "font-size": "48px" }}> {cnt.current}</p> */}
          <button onClick={() => setCount((c) => c + 1)}>+</button>
          <p>{calculation}</p>
          <nav className={styles.bigred}>
            <ul style={{ display: "flex", justifyContent: "center" }}>
              <li>
                <Link to="/signup" className={styles.bgred}>
                  Signup
                </Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <div>
          <h2>Form Example</h2>
          <p>{input}</p>
          <p>{inputElement.current}</p>
          <form className="login-form" onSubmit={handleForm}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <input
              type="text"
              name="username"
              value={form.username || ""}
              onChange={handleChange}
            />

            <button type="submit" id="submit">
              Submit
            </button>
          </form>
        </div>

        <div>
          <h2>Cars List</h2>
          <ul>
            {cars.map((car, index) => (
              <li key={index}>{car}</li>
            ))}
          </ul>
        </div>

        <h1>{isAuth ? "Welcome Back!" : "Please Login"}</h1>
      </div>
    </BrowserRouter>
  );
}

export default App;
