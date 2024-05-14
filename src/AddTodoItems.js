import { Autocomplete, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import _ from 'lodash';

const AddTodoItem = ({ addTodoItem, assignees }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [person, setPerson] = useState("");
  const [formValid, setFormValid] = useState(true); // State to track form validity

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== "" && description.trim() !== "" && person.trim() !== "") {
      addTodoItem({ title, description, person });
      // Reset values
      setTitle("");
      setDescription("");
      setPerson("");
      setFormValid(true); 
    } else {
      setFormValid(false); // Set form validity to false if any field is empty
    }
  }

  return (
    <div style={{ marginTop: "60px", width: "100%", display: "flex", justifyContent: "center"  }}>
      <form onSubmit={handleSubmit}>
        <Stack direction="column" spacing={2} sx={{width:250}}>
        <TextField 
          label="Title" 
          value={title}
          onChange={(e) => setTitle(e.target.value)} 
        />

        <TextField
          label="Description" 
          value={description}
          multiline
          rows={5}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Autocomplete
           options={_.map(assignees, (assignee) => assignee.name)}
          value={person}
          onChange={(e, newValue) => setPerson(newValue)}
          renderInput={(params) => <TextField {...params} label="Choose a person"/>}
        />

        {!formValid && <p style={{ color: 'red' }}>Please fill all the details</p>} {/* Error message */}
        
        <Button type="submit" variant="outlined" color="primary"> 
          Submit
        </Button>
        </Stack>
      </form>
    </div>
  )
}

export default AddTodoItem;
