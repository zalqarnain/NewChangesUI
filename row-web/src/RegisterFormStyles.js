import { makeStyles } from "@mui/styles"

export const useStyles = makeStyles({
    textFieldStyle: {
        marginBottom: "20px",
    },
    existingAccountLink: {
        color: "purple",
        cursor: "pointer",
        textDecoration: "none",
        "&:hover": {
            textDecoration: "underline",
            color: "red",
        },
    },
    tryForFreeButton: {
        textTransform: "capitalize",
        backgroundColor: "#448717",
        color: "white",
        fontSize: "17px",
        marginBottom: "15px",
        borderRadius: "4px",
    },
    forgotPass: {
        marginBottom: '10px'
        // '&:hover'
    },
  });
