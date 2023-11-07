import { makeStyles } from "@mui/styles"

export const useStyles = makeStyles({
    heading: {
        margin: "0 auto 0 auto",
        width: "80%",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "24px",
        color: "#1f0851",
    },
    textFieldStyle: {
        marginBottom: "20px",
        backgroundColor: "white",
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
        color: "#1f0851",
        textDecoration: "underline",
        marginBottom: '10px'
        // '&:hover'
    },
  });
