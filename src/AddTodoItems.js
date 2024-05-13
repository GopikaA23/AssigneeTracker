import { Autocomplete, Button, TextField } from "@mui/material";
import React, { useState } from "react";

const AddTodoItem = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    // addData({title,description});
    // navigateToFirstPage();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
          options={["ruby", "shalu", "keerthi","aswin", "sharan"]}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Choose a person"/>}
        />

        <Button type="submit" variant="outlined" color="primary"> 
          Submit
        </Button>
      </form>
    </div>
  )
}

export default AddTodoItem;