import React, { useState } from "react";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      {isLogin ? (
        <MainPage setIsLogin={setIsLogin} />
      ) : (
        <LoginPage setIsLogin={setIsLogin} />
      )}
    </div>
  );
};

export default App;
