import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={isLogin ? <MainPage setIsLogin={setIsLogin} /> : <LoginPage setIsLogin={setIsLogin} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
