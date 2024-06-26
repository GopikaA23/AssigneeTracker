import React, { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, IconButton, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import People from "./People.json"; // Importing People.json

const LoginPage = ({ setIsLogin }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState(""); // State for error message
  
  const isLoginDisabled = name.trim() === '' || password.trim() === ''; //used to determine if login button should be disabled or not.

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);
  }

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    // Check password conditions(regex)
    if (newPassword.length < 5 || newPassword.length > 8) {
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
    if (name.trim() === '' || password.trim() === '') {
      setErrorMsg('Please fill in all fields');
      return;
    }

    // Check if the username and password match People.json
    const user = People.find((person) => person.Name === name && person.Password === password);
    if (user) {
      setIsLogin(true);
    } else {
      setErrorMsg('Unauthorized user');
    }
  }

  return (
    <div style={{ marginTop: "60px", width: "100%", display: "flex", justifyContent: "center" }}>
      <Stack direction="column" spacing={2} sx={{ width: 300 }}>
        <TextField
          label="Name"
          type="text"
          value={name}
          variant="outlined"
          onChange={handleNameChange}
        />

        <TextField
          label="Password"
          type={showPassword ? "text" : "password"}
          value={password}
          variant="outlined"
          onChange={handlePasswordChange}
          error={!!passwordErrorMsg}
          helperText={passwordErrorMsg}

          // Password visibility:
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

        <Button 
          onClick={handleSubmitBtnClick} 
          variant="outlined" 
          sx={{ width: 150 }}
          disabled={isLoginDisabled}
        >
          Login
        </Button>

        {errorMsg && <Typography color="error">{errorMsg}</Typography>} {/* Display error message */}
      </Stack>
    </div>
  )
}

export default LoginPage;
