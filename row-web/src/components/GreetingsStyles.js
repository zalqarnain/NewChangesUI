import { makeStyles } from "@mui/styles"

export const useStyles = makeStyles({
    "container": {
        position: "relative",
        width: "500px",
        height: "500px",
        backgroundColor: "rgba(255, 255, 0, 0.0)",
    },

    "backgroundDiv": {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "#fafafa",
        zIndex: 2, /* Set a lower z-index to place it below the overlay */
    },

    "overlayDiv": {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "500px",
        height: "500px",
        // mixBlendMode: "exclusion",
        backgroundColor: "rgba(0, 0, 0, 0.0)",
    },
    

  });
