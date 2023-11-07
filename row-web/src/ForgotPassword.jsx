import React, { Component, useEffect } from "react";
import { Container, Grid, Box, Typography, TextField, Button, Link } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import icon from './DeepRoadGraphicMapGoPro.png';
import logo from './DeepRoadLogoText.svg';
import { useStyles } from './ForgotPasswordStyles.js'

const textInputTheme = createTheme({

});


const ForgotPassword = () => {
    const classes = useStyles();

    const [values, setValues] = React.useState({
        email: "",
    });

    const [errorMsg, setErrorMsg] = useState("");

    const isEmail = (email) => {
        var emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if (email !== '' && email.match(emailFormat)) { return true; }

        return false;
    }
    // useEffect(() => {
    //     props.removeAuthErrorAndMessage();
    // }, [])

    const handleSubmit = (e) => {
        setErrorMsg("");
        // props.removeAuthErrorAndMessage();
        if (values.email.length > 0 ? !isEmail(values.email) : true) {
            setErrorMsg("Please enter a valid email.");
        } else {
            e.preventDefault();
            // props.sendPasswordResetEmail(values.email);
        }
    };

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    // const relevantSubmitComponent =
    //     //  showLoader ? (
    //     //     <CircularProgress style={{ color: "#1f0851" }} />
    //     // ) : (
    //     <Button
    //         className={classes.tryForFreeButton}
    //         variant="contained"
    //         onClick={handleSubmit}
    //     >
    //         Send Link
    //     </Button>
    // // );

    return (
        <Container>
            <div style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center', height: `calc(100vh - 70px)`, backgroundColor: ''
            }}>
                <Grid container>
                    <Grid item xs={0} sm={0} lg={6} md={6} xl={6} style={{ backgroundColor: '' }}>
                        <img src={icon} width="100%" />
                    </Grid>


                    <Grid item xs={12} sm={0} lg={6} md={6} xl={6} style={{ backgroundColor: '' }}>
                        <Box style={{ diplay: 'flex', margin: '0 auto', textAlign: 'center' }}>
                            <img src={logo} alt='logo' width="150px" height="auto" />
                            <Typography sx={{ fontSize: '15px' }}>
                            To receive a link to reset your password, <br/>
                            enter your email.
                            </Typography>
                        </Box>
                        

                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Box sx={{ marginTop: "40px", width: '80%', backgroundColor: '', textAlign: 'center' }}>
                                

                            <div>
                                <TextField
                                    fullWidth
                                    className={classes.textFieldStyle}
                                    value={values.email}
                                    onChange={handleChange("email")}
                                    size="small"
                                    id="outlined-basic"
                                    label="Email"
                                    variant="outlined"
                                    color='secondary'
                                />
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                                <Typography variant="subtitle1" className={classes.forgotPass}>
                                    <Link to="/a/forgot-pass" style={{ color: "#1f0851" }}>
                                        Sign into existing account
                                    </Link>
                                </Typography>
                                <Button
                                    className={classes.tryForFreeButton}
                                    style={{ marginLeft: '100px' }}
                                    variant="contained"
                                // onClick={handleSubmit}
                                >
                                    Send Link
                                </Button>
                            </div>

                            {/* <div>
                                            {relevantSubmitComponent}
                                            <Typography
                                                variant="subtitle2"
                                                style={{ color: "red", marginTop: "10px" }}
                                            >
                                                {(errorMsg.length > 0) ? errorMsg : error ?? ""}
                                            </Typography>
                                            <Typography
                                                style={{ color: "green", margin: "4px 0" }}
                                                variant="body2"
                                            >
                                                {message ?? ""}
                                            </Typography>
                                        </div> */}
                                        </Box></div>

                    </Grid>

                </Grid>
            </div>
        </Container>
    );
}

export default ForgotPassword;