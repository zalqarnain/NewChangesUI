import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme) => ({
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
        width: "8rem",
        marginBottom: "15px",
        marginLeft: '200px',
        borderRadius: "4px",
    },
    forgotPass: {
        color: "#1f0851",
        textDecoration: "underline",
        marginBottom: '25px'
        // '&:hover'
    },

}));
export { useStyles };