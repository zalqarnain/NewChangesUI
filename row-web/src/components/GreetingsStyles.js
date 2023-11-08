import { styled } from '@mui/system';
import { Card, Grid, Box } from "@mui/material";

export const OuterContainer = styled(Box)(
    ({ theme }) => ({
        position: "relative",
        width: "500px",
        height: "500px",
        backgroundColor: "rgba(255, 255, 0, 0.0)",
    })
);

export const BackgroundDiv = styled(Box)(
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

export const OverlayDiv = styled(Box)(
    ({ theme }) => ({
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "500px",
        height: "500px",
        // mixBlendMode: "exclusion",
        backgroundColor: "rgba(0, 0, 0, 0.0)",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black'
    })
);

export const OuterBox = styled(Box)(
    ({ theme }) => ({
        width: '100vw',
        display: 'flex',
        justifyContent: 'center'
    })
);

export const OuterCard = styled(Card)(
    ({ theme }) => ({
        display: { xs: "none", sm: "none", md: 'block' },
        borderRadius: '50px',
        backgroundColor: 'transparent',
        padding: '13px',
        border: '0px solid rgba(0,0,0,0.3)'
    })
);

export const InnerCard = styled(Card)(
    ({ theme }) => ({
        width: '55px',
        height: '55px',
        padding: '14px',
        backgroundColor: 'rgba(255,255,255,0.75)',
        borderRadius: 50
    })
);

export const FirstGrid = styled(Grid)(
    ({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        height: `calc(100vh - 70px)`
    })
)

export const SecondGrid = styled(Grid)(
    ({ theme }) => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    })
)
