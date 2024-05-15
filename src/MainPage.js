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
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{marginTop: 1}}>
        <Stack direction="row" spacing={2} sx={{marginLeft:2}}>
          <Button
            onClick={() => handlePageChange('todo')}
            variant={activePage === 'todo' ? "contained" : "text"} 
            color={activePage === 'todo' ? "primary" : "inherit"} 
          >
            Todo
          </Button>
          <Button
            onClick={() => handlePageChange('people')}
            variant={activePage === 'people' ? "contained" : "text"} 
            color={activePage === 'people' ? "primary" : "inherit"}
          >
            People
          </Button>
        </Stack>
        <Button onClick={handleLogoutBtn} variant="contained" sx={{marginRight:2}}>Logout</Button>
      </Stack>

      {activePage === 'todo' && <TodoPage />}
      {activePage === 'people' && <AssigneePage />}

    </div>
  )
}

export default MainPage;
