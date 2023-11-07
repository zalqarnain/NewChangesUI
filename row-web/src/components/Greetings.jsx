import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom'
import Container from "@mui/material/Container";
// import Toolbar from "@mui/material/Toolbar";
import { Card, Chip, Grid, Button } from "@mui/material";
import releaseNotes from "../constants/releaseNotes.json"
import ModelViewer from "../components/cidgets/3D/ModelViewer";
import CameraswitchIcon from '@mui/icons-material/Cameraswitch';
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';
import ControlCameraOutlinedIcon from '@mui/icons-material/ControlCameraOutlined';
import {useStyles} from './GreetingsStyles'

const Greetings = () => {
    const classes = useStyles();

    const [modelHintLayer, setModelHintLayer] = useState(true)
    //   const { appBarHeightSignedOut } = props;

    const showWnp = releaseNotes.notes.length > 0 && !releaseNotes.forceNoShow

    // const classes = useStyles();
    return (
        <div style={{ width: '100vw', backgroundColor: '', display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '85%', backgroundColor: 'transparent' }}>
                {/* <Box sx={{ width: '100%', height: '100%', backgroundColor: 'pink' }}> */}
                <Grid container spacing={0}>
                    <Grid item xs={12} md={5} style={{ display: 'flex', justifyContent: '', alignItems: 'center', backgroundColor: '', height: `calc(100vh - 70px)` }}>
                        <div>
                            <Typography className="greeting-main" variant="h2" gutterBottom sx={{ fontWeight: 'bold', fontSize: { sm: 41, md: 49, lg: 56 } }}>
                                {releaseNotes.greeting}
                            </Typography>
                            {!showWnp ? <></> : <Card className={classes.cardLightStyle} elevation={0}>
                                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                    {releaseNotes.title}{releaseNotes.dev ? <Chip size="medium" variant="error" sx={{ marginLeft: '10px', backgroundColor: 'rgba(255, 0,0, 0.2)', color: 'darkred', border: '1px solid red' }} label={releaseNotes.dev ? "Development" : ""} /> : <></>}
                                </Typography>
                                <p className={ classes.wnpReleaseStyle }>Release {releaseNotes.version}</p>
                                <div style={{ margin: '25px' }}></div>
                                {releaseNotes.notes.map((eachNote, i) => <p key={i} className={classes.wnpStyle} >* {eachNote}</p>)}
                            </Card>
                            }
                            <div style={{ marginTop: '50px' }}>
                                {/* <Link to='/a/register' style={{ textDecoration: 'none' }}> */}
                                    <Button variant="outlined" style={{ borderColor: '#000000', color: '#000000', textTransform: 'initial', cursor: 'pointer', paddingInline: '30px', fontWeight: 'bold', fontSize: '16px' }}>Register now!</Button>
                                {/* </Link> */}
                                {/* <Link to='/a/login' style={{ color: 'black', backgroundColor: 'white' }}> */}
                                    <Typography variant="body1" sx={{ marginTop: '15px', color: 'black' }}>
                                        Or login in to your existing account
                                    </Typography>
                                {/* </Link> */}
                            </div>
                        </div>

                    </Grid>
                    <Grid item xs={12} md={7} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '', }}>
                        <Card sx={{ display: { xs: "none", sm: "none", md: 'block' }, borderRadius: '50px', backgroundColor: 'transparent', padding: '13px', border: '0px solid rgba(0,0,0,0.3)' }} elevation={0}>

                            <div className={classes.container}>
                                <div className={classes.backgroundDiv}>
                                    <ModelViewer />
                                </div>
                                <div className={classes.overlayDiv} style={{ zIndex: modelHintLayer ? 3 : 1, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black' }} onMouseOverCapture={() => { setModelHintLayer(false) }} onMouseUpCapture={() => { setModelHintLayer(true) }}>
                                    <Card sx={{ width: '55px', height: '55px', padding: '14px', backgroundColor: 'rgba(255,255,255,0.75)', borderRadius: 50 }} elevation={10}>
                                        <ControlCameraOutlinedIcon sx={{ fontSize: '25px' }} />
                                    </Card>
                                </div>
                            </div>
                            <Typography sx={{ fontSize: '12px', color: 'grey', marginTop: '7px' }} style={{ textAlign: 'center' }}>
                                Interactive reconstruction from motion by {releaseNotes.name}'s 3D Engine
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>
                {/* </Box> */}
            </div>
        </div>
    );
};

export default Greetings;