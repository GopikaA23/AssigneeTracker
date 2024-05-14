import React, { useState } from "react";
import AddAssignee from "./AddAssignee";
import { Button, Link, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import _ from "lodash";

const AssigneePage = () => {
  const [isAddBtnClicked, setIsAddBtnClicked] = useState(false);
  const [assignees, setAssignees] = useState([]);
  const [idCounter, setIdCounter] = useState(1);

  const handleAddButton = () => {
    setIsAddBtnClicked(true);
  }

  const addAssignee = (newAssignee) => {
    const updatedAssignees = [...assignees, { id: idCounter, ...newAssignee }];
    setAssignees(updatedAssignees);
    setIdCounter(idCounter + 1);
    setIsAddBtnClicked(false);
  }

  console.log("Assigneepage", assignees)

  return (
    <div>
      {!isAddBtnClicked ? (
      <>
      <TableContainer style={{ marginTop: "64px" }}>
        <Table style={{ maxWidth: 800 }}>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Phone Num</TableCell>
              <TableCell>Todo Count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {_.map(assignees,(assignee) => (
              <TableRow key={assignee.id}>
                <TableCell>{assignee.id}</TableCell>
                <TableCell>{assignee.name}</TableCell>
                <TableCell>{assignee.phonenum}</TableCell>
                <TableCell>{/* Calculate todo count */}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div style={{ position: "fixed", bottom: "550px", right: "20px" }}>
        <Button 
          component={Link} 
          to="/add-page" 
          variant="outlined" 
          color="primary" 
          onClick={handleAddButton}  
          sx={{width: 92}}
        >
          Add 
        </Button>
      </div>

      </>
      ) : (
        <AddAssignee addAssignee={addAssignee} setIsAddBtnClicked={setIsAddBtnClicked} />
      )}
    </div>
  )
}

export default AssigneePage;
