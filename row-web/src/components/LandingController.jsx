import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom'
import { Toolbar } from '@mui/material';
import Greetings from './Greetings';

const LandingController = () => {
    // const isSignedIn = props.isSignedIn;
    // const { appBarHeightSignedOut } = props;
    // let location = useLocation();
    // if (isSignedIn) {
    //     return <Navigate to="/home" state={{ from: location }} replace />;
    // }
    return (
        <>
            {/* <Toolbar /> */}
            <Greetings/>
        </>
    );
}

export default LandingController;