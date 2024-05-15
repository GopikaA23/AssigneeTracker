import React, { useState } from "react";
import { Button, Link, Card, CardContent, Typography, Box } from "@mui/material";
import _ from "lodash";
import AddTodoItem from "./AddTodoItems";

const TodoPage = () => {
  const [isAddClicked, setIsAddClicked] = useState(false);
  const [todoItems, setTodoItems] = useState([]);

  const handleAddBtnClick = () => {
    setIsAddClicked(true);
  }

  const addTodoItem = (newTodoItem) => {
    const createdAt = new Date(); // Get current date and time
    newTodoItem.createdAt = createdAt.toLocaleString(); 
    setTodoItems([...todoItems, newTodoItem]);
    setIsAddClicked(false);
  }

  return (
    <div>
      {!isAddClicked ? (
        <>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}> 
            {_.map(todoItems,(item, index) => (
              <Box key={index} sx={{ marginBottom: 2 }}>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="body2" color="text.secondary" style={{ textAlign: 'right' }}>
                      Created at: {item.createdAt}
                    </Typography>
                    <Typography variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {item.description}
                    </Typography>
                    <Typography variant="body2">
                      Assigned to: {item.person}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </div>

          <div style={{ position: "fixed", bottom: "550px", right: "20px" }}>
            <Button 
              LinkComponent={Link} 
              to="/add-page" 
              sx={{width: 92}}
              variant="outlined" 
              color="primary" 
              onClick={handleAddBtnClick} 
              size="large"
            >
              Add
            </Button>
          </div>
        </>
      ) : (
        <AddTodoItem addTodoItem={addTodoItem} setIsAddClicked={setIsAddClicked} />
      )}
    </div>
  )
}

export default TodoPage;
