import { styled } from '@mui/system';
import { Box, Button, Grid } from '@mui/material';

export const OuterGrid = styled(Grid)(
    ({ theme }) => ({
        alignItems: 'center', 
        justifyContent: 'center' 
    })
);

export const Heading = styled(Box)(
    ({ theme }) => ({
        diplay: 'flex', 
        textAlign: 'center'
    })
)

export const DetailsText = styled(Box)(
    ({ theme }) => ({
        display: 'flex', 
        alignItems: 'center'
    })
)

export const ErrorText = styled(Box)(
    ({ theme }) => ({
        color: "red", 
        marginTop: "10px",
         display: 'flex', 
         justifyContent: 'center' 
    })
)