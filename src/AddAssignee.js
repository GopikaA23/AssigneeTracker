import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const AddAssignee = () => {
  const [name,setName] =useState("");
  const [phonenum, setPhonenum] = useState("");

  return (
    <div>
      <form>
      <TextField
        label="Name"
        value={name}
        variant="outlined"
        type="text"
        onChange={(e) => setName(e.target.value)}
      />

      <TextField
        label="Phone Number"
        value={phonenum}
        variant="outlined"
        type="number"
        onChange={(e) => setPhonenum(e.target.value)}
      />

      <Button type="submit" variant="outlined" color="primary">Submit</Button>
      </form> 
    </div>
  )
}

export default AddAssignee;