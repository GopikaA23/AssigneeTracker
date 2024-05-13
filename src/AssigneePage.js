import React, { useState } from "react";
import AddAssignee from "./AddAssignee";
import { Button, Link, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const AssigneePage = () => {
  const [isAddBtnClicked, setIsAddBtnClicked] = useState("");

  const handleAddButton = () => {
    setIsAddBtnClicked(!isAddBtnClicked);
  }

  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Phnone Num</TableCell>
              <TableCell>Todo Count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          </TableBody>
        </Table>
      </TableContainer>
      <Button LinkComponent={Link} to="/add-page" variant="outlined" color="primary" onClick={handleAddButton}>Add Assignee</Button>
      {isAddBtnClicked && <AddAssignee/>}
    </div>
  )

}

export default AssigneePage;