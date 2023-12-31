import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
// import { connect } from "react-redux";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { Typography, Checkbox, Link } from "@mui/material";
// import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import InputBase from '@mui/material/InputBase';
import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import CircularProgress from "@mui/material/CircularProgress";
import { useTheme } from '@mui/material/styles';
import Select from '@mui/material/Select';
import countryList from 'country-list-js';
import logo from './DeepRoadLogoText.svg';
import { Heading, DetailsText, ErrorText } from './RegisterFormStyles.js'

const countries = Object.values(countryList.all).sort((a, b) => {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
});
// console.log('countryList=======>', typeof (countries['0']))
// console.log('names=======>', countries['0'].name)


function RegisterForm(props) {

    //   const { error, showLoader } = props.auth;

    const [values, setValues] = React.useState({
        fullName: "",
        email: "",
        orgName: "",
        password: "",
        showPassword: false,
        countryName: ''
    });

    const [errorMsg, setErrorMsg] = useState("");

    //   useEffect(() => {
    //     props.removeAuthErrorAndMessage();
    //   }, [])

    const handleSubmit = (e) => {
        // props.removeAuthErrorAndMessage();
        setErrorMsg("");
        if (values.fullName.length == 0) {
            setErrorMsg("Please enter the Full name.");
        } else if (values.email.length == 0) {
            setErrorMsg("Please enter a valid email.");
        } else if (values.orgName.length == 0) {
            setErrorMsg("Please enter the Organization name.");
        } else if (values.password.length < 6) {
            setErrorMsg("Password must be atleast 6 characters.");
        }
        else if (values.countryName.length == 0) {
            setErrorMsg("Please select your country name.");
        }
        else {
            let trimmedfullName = values.fullName.trim()
            let trimmedEmail = values.email.trim()
            let trimmedOrgName = values.orgName.trim()
            e.preventDefault();
            //   props.signUp(trimmedfullName, trimmedEmail, trimmedOrgName, values.password, values.countryName)
        }
    };

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

        //     showLoader ? (
        //     <Button variant="contained" disabled sx={{
        //       textTransform: 'initial', backgroundColor: '#448717', color: '#D9D9D9',
        //       "&.Mui-disabled": {
        //         backgroundColor: '#448717',
        //         color: '#D9D9D9'
        //       }
        //     }}>
        //       <CircularProgress variant="indeterminate" size={15} sx={{ color: 'white' }} /><span style={{ paddingLeft: '15px' }}>Creating an account...</span>
        //     </Button>
        //   ) : (
        <Button
            // className={classes.tryForFreeButton}
            variant="contained"
            sx={{ textTransform: 'inherit' }}
            onClick={handleSubmit}

        >
            Register
        </Button>
    //   );

    // console.log(countries)
    return (
        // <Box style={{ width: "70vh", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Grid container>
            <Grid item xs={12}>
                <Box sx={{ marginTop: { xs: '20px', md: '0px' }, width: '100%' }}>


                    {/* <Typography variant="h5" gutterBottom sx={{ fontWeight: '', marginBottom: '50px',display:'flex',justifyContent:'center', color:'#1e1e1e' }}>
            Create a free account
          </Typography> */}
                    <Heading style={{ margin: '0 auto' }} >
                        <img src={logo} alt='logo' width="150px" height="auto" />
                        <Typography sx={{ fontSize: '15px' }}>
                            Lörem ipsum resa prerade, krodast. <br />
                            Heterorad lilingar dibör, plavis bigas krock.
                        </Typography>
                    </Heading>

                    <Box style={{ padding: '20px' }}></Box>

                    {/* name */}
                    <TextField
                        fullWidth
                        style={{ marginBottom: "20px" }}
                        value={values.fullName}
                        onChange={handleChange("fullName")}
                        size="small"
                        id="outlined-basic"
                        label="Full name"
                        variant="outlined"
                    />
                    <Box>
                        <TextField
                            fullWidth
                            style={{ marginBottom: "20px" }}
                            value={values.email}
                            onChange={handleChange("email")}
                            size="small"
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                        />
                    </Box>
                    <Box>
                        <TextField
                            fullWidth
                            style={{ marginBottom: "20px" }}
                            value={values.orgName}
                            onChange={handleChange("orgName")}
                            size="small"
                            id="outlined-basic"
                            label="Organisation name"
                            variant="outlined"
                        />
                    </Box>
                    <Box>
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
                                    marginBottom: "20px",
                                    backgroundColor: "white",
                                    color: "#000",
                                }}
                                size="small"
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
                    </Box>
                    {/* country */}
                    <Box>
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Country"
                            value={values.countryName}
                            onChange={handleChange("countryName")}
                            // helperText="Please select country name"
                            fullWidth
                            // className={classes.textFieldStyle}
                            style={{ marginBottom: "20px" }}
                            size="small"
                        >
                            {countries.map((option, key) => (
                                <MenuItem key={key} value={option.name}>
                                    {option.name}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                    {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
                            {relevantSubmitComponent}

                        </div> */}

                    <DetailsText style={{ marginBottom: '5px' }}>
                        <Checkbox color="primary" />
                        <Typography>
                            Remember your account details.
                        </Typography>
                    </DetailsText>
                    <DetailsText>
                        <Typography variant="subtitle1" style={{ marginBottom: '10px' }}>
                            <Link to="/a/forgot-pass" style={{ color: "#1f0851" }}>
                                Sign into existing account
                            </Link>
                        </Typography>
                        <Button
                            // className={classes.tryForFreeButton}
                            style={{ marginLeft: '200px' }}
                            variant="contained"
                        // onClick={handleSubmit}
                        >
                            Register
                        </Button>
                    </DetailsText>

                    <ErrorText
                        variant="subtitle2"
                    >
                        {errorMsg}
                    </ErrorText>
                    {/* <Typography style={{ color: "red", margin: "0px", display: 'flex', justifyContent: 'center' }}>
              {error ?? ""}
            </Typography> */}
                    {/* <Link style={styles.existingAccountLink} to="/a/login">
              Or sign into an existing account
            </Link> */}
                </Box>
            </Grid>
        </Grid>
        // </Box>
    );
}

export default RegisterForm;
