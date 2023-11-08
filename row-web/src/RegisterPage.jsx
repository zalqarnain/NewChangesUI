import React from "react";
import RegisterForm from "../src/RegisterForm";
// import { connect } from "react-redux";
import Grid from "@mui/material/Grid";
// import { Navigate } from "react-router-dom";
import { Container, Paper, Typography } from "@mui/material";
import icon from './DeepRoadGraphicMapGoPro.png';
import { OuterGrid } from './RegisterFormStyles.js'

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
          <OuterGrid item xs={0} sm={0} lg={6} md={6} xl={6} sx={{display: { xs: 'none', md: 'flex' }}}>
            <img src={icon} width="100%" />
          </OuterGrid>
          <OuterGrid item xs={12} sm={0} lg={6} md={6} xl={6} sx={{display: 'flex'}}>

            <RegisterForm />
          </OuterGrid>
        </Grid>
      </Container>
    );
  // }
};

export default RegisterPage;
