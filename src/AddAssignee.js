import React, { useState } from "react";
import { Button, Stack, TextField } from "@mui/material";

const AddAssignee = ({ addAssignee }) => {
  const [name, setName] = useState("");
  const [phonenum, setPhonenum] = useState("");
  const [isFormValid, setIsFormValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== "" && phonenum.trim() !== "") {
      addAssignee({ name, phonenum });
  
      // Reset values
      setName("");
      setPhonenum("");
      setIsFormValid(true);
    } else {
      setIsFormValid(false)
    }
  }

  return (
    <div style={{ marginTop: "60px", width: "100%", display: "flex", justifyContent: "center"  }}>
      <form onSubmit={handleSubmit}>
        <Stack direction="column" sx={{width:250}} spacing={2} >
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
            type="text"
            onChange={(e) => setPhonenum(e.target.value)}
          />

        {!isFormValid && <p style={{ color: 'red' }}>Please fill all the details</p>} {/* Error message */}

        <Button type="submit" variant="outlined" color="primary" sx={{width: 100}} >Submit</Button>
        </Stack>
      </form>
    </div>
  )
}

export default AddAssignee;
