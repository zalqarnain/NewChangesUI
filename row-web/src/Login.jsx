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

const Login=()=> {
    const [values, setValues] = useState({
        email: "",
        password: "",
        showPassword: false,
      });
    
      const [errorMsg, setErrorMsg] = useState("");
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (e) => {
        e.preventDefault();
      };
      const relevantSubmitComponent =
    
        // showLoader ? (
        //   <CircularProgress style={{ color: "#1f0851" }} />
        // ) : (
        <Button
          style={styles.tryForFreeButton}
          variant="contained"
        // onClick={handleSubmit}
        >
          Login
        </Button>
      // );
    return (
        <Container >
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', height: `calc(100vh - 70px)`, backgroundColor: ''
      }}>
        <Grid container>
          <Grid item xs={6} style={{ backgroundColor: '' }}>
            <img src={icon} alt='logo' width="500px" height="auto" />
          </Grid>
          <Grid item xs={6} style={{ backgroundColor: '' }}>
            <Box style={{ diplay: 'flex', margin: '0 auto', textAlign: 'center' }}>
              <img src={logo} alt='logo' width="150px" height="auto" />
              <Typography sx={{ fontSize:'15px' }}>
                Lörem ipsum resa prerade, krodast. <br />
                Heterorad lilingar dibör, plavis bigas krock.
              </Typography>
            </Box>
            <ThemeProvider theme={textInputTheme}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{ marginTop: "40px", width: '80%', backgroundColor: '', textAlign: 'center' }}>
                  <div>
                    <TextField
                      fullWidth
                      style={styles.textFieldStyle}
                      value={values.email}
                      onChange={handleChange("email")}
                      size="small"
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      color='secondary'
                    />
                  </div>
                  <div>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel
                        htmlFor="outlined-adornment-password"
                        size="small"
                      >
                        Password
                      </InputLabel>
                      <OutlinedInput
                        fullWidth
                        style={{
                          marginBottom: "30px",
                          backgroundColor: "white",
                          color: "#000",
                        }}
                        size="small"
                        color='secondary'
                        id="outlined-adornment-password"
                        label="Password"
                        type={values.showPassword ? "text" : "password"}
                        value={values.password}
                        onChange={handleChange("password")}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {/* {values.showPassword ? <VisibilityOff /> : <Visibility />} */}
                              {values.showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                    <Checkbox color="primary" />
                    <Typography variant="subtitle1">
                    Remember your account details.
                    </Typography>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="subtitle1" style={{ ...styles.forgotPass, marginBottom: '25px' }}>
                      <Link to="/a/forgot-pass" style={{ color: "#1f0851" }}>
                        Forgot password?
                      </Link>
                    </Typography>
                    <Button
                      style={{ ...styles.tryForFreeButton, marginLeft: '200px' }}
                      variant="contained"
                    // onClick={handleSubmit}
                    >
                      Login
                    </Button>
                  </div>

                </Box>
              </div>
            </ThemeProvider>
          </Grid>
        </Grid>
      </div>
    </Container>
    );
}

export default Login;