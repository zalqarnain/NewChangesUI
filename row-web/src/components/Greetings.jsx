import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom'
import Container from "@mui/material/Container";
// import Toolbar from "@mui/material/Toolbar";
import { Card, Chip, Grid, Button, Box } from "@mui/material";
import releaseNotes from "../constants/releaseNotes.json"
import ModelViewer from "../components/cidgets/3D/ModelViewer";
import CameraswitchIcon from '@mui/icons-material/Cameraswitch';
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';
import ControlCameraOutlinedIcon from '@mui/icons-material/ControlCameraOutlined';
import { useStyles } from './GreetingsStyles'
import { styled } from '@mui/system';

const OuterContainer = styled(Box)(
    ({ theme }) => ({
        position: "relative",
        width: "500px",
        height: "500px",
        backgroundColor: "rgba(255, 255, 0, 0.0)",
    })
);

const BackgroundDiv = styled(Box)(
    ({ theme }) => ({
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "#fafafa",
        zIndex: 2,
    })
);

const OverlayDiv = styled(Box)(
    ({ theme }) => ({
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "500px",
        height: "500px",
        // mixBlendMode: "exclusion",
        backgroundColor: "rgba(0, 0, 0, 0.0)",
    })
);

const OuterBox = styled(Box)(
    ({ theme }) => ({
        width: '100vw', 
        display: 'flex', 
        justifyContent: 'center'
    })
);

const Greetings = () => {
    const classes = useStyles();

    const [modelHintLayer, setModelHintLayer] = useState(true)
    //   const { appBarHeightSignedOut } = props;

    const showWnp = releaseNotes.notes.length > 0 && !releaseNotes.forceNoShow

    // const classes = useStyles();
    return (
        <OuterBox >
            <Box style={{ width: '85%', backgroundColor: 'transparent' }}>
                {/* <Box sx={{ width: '100%', height: '100%', backgroundColor: 'pink' }}> */}
                <Grid container spacing={0}>
                    <Grid item xs={12} md={5} style={{ display: 'flex', alignItems: 'center', height: `calc(100vh - 70px)` }}>
                        <Box>
                            <Typography className="greeting-main" variant="h2" gutterBottom sx={{ fontWeight: 'bold', fontSize: { sm: 41, md: 49, lg: 56 } }}>
                                {releaseNotes.greeting}
                            </Typography>
                            {!showWnp ? <></> : <Card style={{ marginBottom: '10px' }} elevation={0}>
                                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                    {releaseNotes.title}{releaseNotes.dev ? <Chip size="medium" variant="error" sx={{ marginLeft: '10px', backgroundColor: 'rgba(255, 0,0, 0.2)', color: 'darkred', border: '1px solid red' }} label={releaseNotes.dev ? "Development" : ""} /> : <></>}
                                </Typography>
                                <p style={{ fontSize: '13px', marginLeft: '27px' }}>Release {releaseNotes.version}</p>
                                <Box style={{ margin: '25px' }}></Box>
                                {releaseNotes.notes.map((eachNote, i) => <p key={i} style={{ marginBlock: 4 }} >* {eachNote}</p>)}
                            </Card>
                            }
                            <Box style={{ marginTop: '50px' }}>
                                {/* <Link to='/a/register' style={{ textDecoration: 'none' }}> */}
                                <Button variant="outlined" style={{ borderColor: '#000000', color: '#000000', textTransform: 'initial', cursor: 'pointer', paddingInline: '30px', fontWeight: 'bold', fontSize: '16px' }}>Register now!</Button>
                                {/* </Link> */}
                                {/* <Link to='/a/login' style={{ color: 'black', backgroundColor: 'white' }}> */}
                                <Typography variant="body1" sx={{ marginTop: '15px', color: 'black' }}>
                                    Or login in to your existing account
                                </Typography>
                                {/* </Link> */}
                            </Box>
                        </Box>

                    </Grid>
                    <Grid item xs={12} md={7} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '', }}>
                        <Card sx={{ display: { xs: "none", sm: "none", md: 'block' }, borderRadius: '50px', backgroundColor: 'transparent', padding: '13px', border: '0px solid rgba(0,0,0,0.3)' }} elevation={0}>

                            <OuterContainer>
                                <BackgroundDiv className={classes.backgroundDiv}>
                                    <ModelViewer />
                                </BackgroundDiv>
                                <OverlayDiv className={classes.overlayDiv} style={{ zIndex: modelHintLayer ? 3 : 1, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black' }} onMouseOverCapture={() => { setModelHintLayer(false) }} onMouseUpCapture={() => { setModelHintLayer(true) }}>
                                    <Card sx={{ width: '55px', height: '55px', padding: '14px', backgroundColor: 'rgba(255,255,255,0.75)', borderRadius: 50 }} elevation={10}>
                                        <ControlCameraOutlinedIcon sx={{ fontSize: '25px' }} />
                                    </Card>
                                </OverlayDiv>
                            </OuterContainer>
                            <Typography sx={{ fontSize: '12px', color: 'grey', marginTop: '7px' }} style={{ textAlign: 'center' }}>
                                Interactive reconstruction from motion by {releaseNotes.name}'s 3D Engine
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>
                {/* </Box> */}
            </Box>
        </OuterBox>
    );
};

export default Greetings;