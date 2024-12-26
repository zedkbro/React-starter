import { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./Login";

const isAuth = true;

function App() {
  const cars = ["Tesla", "Nexus", "Bugatti"];
  const [form, setForm] = useState({});
  function handleForm(event) {
    event.preventDefault();
    alert(`Username: ${form.username}`);
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li><Link to="/signup">Signup</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <div>
          <h2>Form Example</h2>
          <form className="login-form" onSubmit={handleForm}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              value={form.username || ""}
              onChange={handleChange}
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={form.password || ""}
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
