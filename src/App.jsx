import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './component/login.jsx';
import RegisterPage from './component/register.jsx';
import Home from "./component/Home.jsx";

function App() {

  const header = () => {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  };

  return (
    <Routes>  
        {header}
        <Route path='/' element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<Login />} />
      
    </Routes>
  );
}

export default App;
