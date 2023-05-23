import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import HomePage from "./pages/HomePage";
import "./index.css";
const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/country-details/:name" element={<CountryDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
