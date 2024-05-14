import React, { useState } from "react";
import TodoPage from "./TodoPage";
import AssigneePage from "./AssigneePage";
import { Button, Stack } from "@mui/material";

const MainPage = ({ setIsLogin }) => {
  const [activePage, setActivePage] = useState('todo');

  const handlePageChange = (page) => {
    setActivePage(page);
  }

  const handleLogoutBtn = () => {
    setIsLogin(false); 
  };

  return (
    <div>
      <Stack direction="row">
        <Button onClick={() => handlePageChange('todo')}>Todo</Button>
        <Button onClick={() => handlePageChange('people')}>People</Button>

        <div style={{ position: "fixed", bottom: "620px", right: "20px" }}>
        <Button onClick={handleLogoutBtn} variant="contained">Logout</Button>
        </div>

      </Stack>

      {activePage === 'todo' && <TodoPage />}
      {activePage === 'people' && <AssigneePage />}

    </div>
  )
}

export default MainPage;
