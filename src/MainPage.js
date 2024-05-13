import React, { useState } from "react";
import TodoPage from "./TodoPage";
import Loginpage from "./LoginPage";
import AssigneePage from "./AssigneePage";
import { Button, Stack } from "@mui/material";

const MainPage = () => {
  const [isTodoClicked,setIsTodoClicked] = useState(true);
  const [isPeopleClicked, setIsPeopleClicked] = useState(false);
  const [isLogout, setIsLogout] = useState(false);

  const handleTodoBtn = () => {
    setIsTodoClicked(!isTodoClicked);
  }

  const handlePeopleBtn = () => {
    setIsPeopleClicked(!isPeopleClicked);
    setIsTodoClicked(false);
  }

  const handleLogoutBtn = () => {
    setIsLogout(!isLogout);
    setIsPeopleClicked(false);
    setIsTodoClicked(false);
  };

  return (
    <div>
      <Stack direction="row">
        <Button onClick={handleTodoBtn}>Todo</Button>
        <Button onClick={handlePeopleBtn}>People</Button>
        <Button onClick={handleLogoutBtn}>Logout</Button>
      </Stack>

      {isTodoClicked && <TodoPage/>}

      {isPeopleClicked && <AssigneePage/>}

      {isLogout && <Loginpage/>}
    </div>
  )
}

export default MainPage;