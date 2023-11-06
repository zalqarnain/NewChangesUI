import React from "react";
import RegisterForm from "../src/RegisterForm";
// import { connect } from "react-redux";
import Grid from "@mui/material/Grid";
// import { Navigate } from "react-router-dom";
import { Container, Paper, Typography } from "@mui/material";
import icon from './DeepRoadGraphicMapGoPro.png';

const RegisterPage = () => {
  // if (isSignedIn) {
  //   return <Navigate to="/home/dashboard" />;
  // } else {
    return (
      <Container>
        <Grid
          container
          // spacing={5}
          // rowSpacing={100}
          columnSpacing={17}
          direction="row"
          style={{ height: `calc(100vh - 70px)`, backgroundColor: '' }}
        >
          <Grid item xs={0} sm={0} lg={6} md={6} xl={6} sx={{ backgroundColor: "", display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center' }}>
            <img src={icon} width="100%" />
          </Grid>
          <Grid item xs={12} sm={0} lg={6} md={6} xl={6} style={{ backgroundColor: "", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

            <RegisterForm />
          </Grid>
        </Grid>
      </Container>
    );
  // }
};

export default RegisterPage;
