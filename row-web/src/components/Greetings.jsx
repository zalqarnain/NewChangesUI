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
import { OuterContainer, BackgroundDiv, OverlayDiv, OuterBox, OuterCard, InnerCard, FirstGrid, SecondGrid } from './GreetingsStyles'

const Greetings = () => {

    const [modelHintLayer, setModelHintLayer] = useState(true)
    //   const { appBarHeightSignedOut } = props;

    const showWnp = releaseNotes.notes.length > 0 && !releaseNotes.forceNoShow

    // const classes = useStyles();
    return (
        <OuterBox >
            <Box style={{ width: '85%', backgroundColor: 'transparent' }}>
                {/* <Box sx={{ width: '100%', height: '100%', backgroundColor: 'pink' }}> */}
                <Grid container spacing={0}>
                    <FirstGrid item xs={12} md={5}>
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

                    </FirstGrid>
                    <SecondGrid item xs={12} md={7}>
                        <OuterCard elevation={0}>

                            <OuterContainer>
                                <BackgroundDiv>
                                    <ModelViewer />
                                </BackgroundDiv>
                                <OverlayDiv style={{ zIndex: modelHintLayer ? 3 : 1 }} onMouseOverCapture={() => { setModelHintLayer(false) }} onMouseUpCapture={() => { setModelHintLayer(true) }}>
                                    <InnerCard elevation={10}>
                                        <ControlCameraOutlinedIcon sx={{ fontSize: '25px' }} />
                                    </InnerCard>
                                </OverlayDiv>
                            </OuterContainer>
                            <Typography sx={{ fontSize: '12px', color: 'grey', marginTop: '7px' }} style={{ textAlign: 'center' }}>
                                Interactive reconstruction from motion by {releaseNotes.name}'s 3D Engine
                            </Typography>
                        </OuterCard>
                    </SecondGrid>
                </Grid>

                {/* </Box> */}
            </Box>
        </OuterBox >
    );
};

export default Greetings;