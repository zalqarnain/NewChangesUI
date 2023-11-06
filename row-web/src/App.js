import './App.css';
import { Container, Grid, Box, Typography, TextField, Link, Button, IconButton, Checkbox } from '@mui/material';
import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import icon from './DeepRoadGraphicMapGoPro.png';
import logo from './DeepRoadLogoText.svg';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import RegisterPage from './RegisterPage';
import LandingController from './components/LandingController';

const textInputTheme = createTheme({
  palette: {
    primary: {
      main: "#448717",
      // main: "#ec2121",
    },
    secondary: {
      main: "#448717"
    }
  }
});

const styles = {
  heading: {
    margin: "0 auto 0 auto",
    width: "80%",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "24px",
    color: "#1f0851",
  },
  textFieldStyle: {
    marginBottom: "20px",
    backgroundColor: "white",
  },
  existingAccountLink: {
    color: "purple",
    cursor: "pointer",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
      color: "red",
    },
  },
  tryForFreeButton: {
    textTransform: "capitalize",
    backgroundColor: "#448717",
    color: "white",
    fontSize: "17px",
    width: "8rem",
    marginBottom: "15px",
    borderRadius: "4px",
  },
  forgotPass: {
    color: "#1f0851",
    textDecoration: "underline",
    // '&:hover'
  },
};

function App() {

  return (
    <div>
      {/* <Login/> */}
      {/* <ForgotPassword /> */}
      {/* <RegisterPage/> */}
      <LandingController />
    </div>
  );
}

export default App;
