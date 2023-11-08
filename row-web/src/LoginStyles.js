import { styled } from '@mui/system';
import { Button , Box} from '@mui/material';

export const ButtonStyle = styled(Button)(
    ({ theme }) => ({
        textTransform: "capitalize",
        fontSize: "17px",
        width: "100px",
        marginBottom: "15px",
        marginLeft: '200px',
        borderRadius: "4px",
    })
);

export const OuterDiv = styled(Box)(
    ({ theme }) => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    })
);

export const InnerDiv = styled(Box)(
    ({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
    })
);