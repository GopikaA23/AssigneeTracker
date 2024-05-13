import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, IconButton, InputAdornment, Stack, TextField } from "@mui/material";

const Loginpage = () => {
  const [name,setName] = useState("");
  const [password,setPassword] = useState("");
  const [passwordErrorMsg,setPasswordErrorMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);
  }

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    //Check password conditions(regex)

    if(newPassword.length < 5 || newPassword.length > 8) {
      setPasswordErrorMsg("Password length should be 5 to 8 characters.");
    } else if (!newPassword.match(/\d/)) {
      setPasswordErrorMsg("Password must contain at least one number.");
    } else if (!/[!@#$%^&*]/.test(newPassword)) {
      setPasswordErrorMsg("Password must contain at least one special character.");
    } else {
      setPasswordErrorMsg("");
    }
  }

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  const handleSubmitBtnClick = () => {
    setIsSubmitted(!isSubmitted)
  }

  return (
    <div>
      <Stack direction="column">
     <TextField 
       label="Name" 
       type="text"
       value={name}
       variant="filled"
       onChange={handleNameChange}
     /> 

     <TextField
       label="Password"
       type={showPassword ? "text" : "password"}
       value={password} 
       variant="filled"
       onChange={handlePasswordChange}
       error={!!passwordErrorMsg}
       helperText={passwordErrorMsg}
       
       //Password visibility:
       InputProps={{
         endAdornment: (
           <InputAdornment position="end">
             <IconButton
               aria-label="toggle password visibility"
               onClick={handlePasswordVisibility}
             >
               {showPassword ? <Visibility /> : <VisibilityOff />}
             </IconButton>
           </InputAdornment>
         ),
       }}
      />  

      <Button onClick={handleSubmitBtnClick}>Submit</Button>
      </Stack>
    </div>
  )
}

export default Loginpage;