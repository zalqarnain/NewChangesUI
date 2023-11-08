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
import {customTheme} from './components/customTheme'

function App() {

  return (
    <div>
      <ThemeProvider theme={customTheme}>
        <Login />
        {/* <ForgotPassword /> */}
        {/* <RegisterPage/> */}
        {/* <LandingController /> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
