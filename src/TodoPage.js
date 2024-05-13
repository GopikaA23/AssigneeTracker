import { Button, Link, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useState } from "react";
import AddTodoItem from "./AddTodoItems";

const TodoPage = () => {
  const [isAddClicked, setIsAddClicked] = useState(false);

  const handleAddBtnClick = () => {
    setIsAddClicked(!isAddClicked);
  }

  return (
   <div>
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Person</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        </TableBody>
      </Table>
    </TableContainer>
    <Button LinkComponent={Link} to="/add-page" variant="outlined" color="primary" onClick={handleAddBtnClick}>Add</Button>
    {isAddClicked && <AddTodoItem/>}
   </div>
  )
}

export default TodoPage;