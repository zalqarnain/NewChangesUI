import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const customTheme=createTheme({

    palette: {
        primary: {
            main: "#1976d2",
            // main: "#ec2121",
        },
        secondary: {
            main: "#448717"
        }
    },

    typography:{
    //   allVariants:{
    //     color: 'purple'
    //   },
        subtitle1:{
            color: "#1f0851",
            textDecoration: "underline",
        },
    },
    
    overrides: {

      MuiDialogContent: {
        root: {
          backgroundColor: "orange", 
          padding: "16px", 
        },
      },
        // Style sheet name ⚛️
        MuiButton: {
          // Name of the rule
          outlined: {
            // Some CSS
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            borderRadius: 3,
            border: 0,
            color: 'white',
            height: 48,
            padding: '0 30px',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          },

          contained: {
            // Some CSS
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            borderRadius: 3,
            border: 0,
            color: 'green',
            height: 48,
            padding: '0 30px',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          },
        },
        
        MuiTextField : {
            root: {
                
                backgroundColor: 'white',
                border: '1px solid gray',

              },
        },

        MuiCircularProgress : {
          root: {
            color: 'white'
          }
        }

      },
})