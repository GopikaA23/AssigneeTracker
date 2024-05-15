import { Autocomplete, Button, Stack, TextField } from "@mui/material";
import _ from "lodash";
import React, { useState } from "react";
import peopleData from "./People.json"; 

const AddTodoItem = ({ addTodoItem }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [person, setPerson] = useState("");
  const [formValid, setFormValid] = useState(true); 

  const isSubmitBtnDisabled = title.trim() === "" || description.trim() === ""; //determine submit should disabled or not

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== "" && description.trim() !== "" && person !== "") { 
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
            options={_.map(peopleData,(person => person.Name))} // Setting options to names from people.json
            value={person}
            onChange={(e, newValue) => setPerson(newValue)}
            renderInput={(params) => <TextField {...params} label="Choose a person"/>}
          />

          {!formValid && <p style={{ color: 'red' }}>Please fill all the details</p>} {/* Error message */}
          
          <Button type="submit" variant="outlined" color="primary" disabled={isSubmitBtnDisabled}> 
            Submit
          </Button>
        </Stack>
      </form>
    </div>
  )
}

export default AddTodoItem;
