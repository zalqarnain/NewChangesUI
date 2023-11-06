import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const customTheme=createTheme({

    typography:{
      allVariants:{
        color: 'purple'
      },
        h5:{
            fontSize:'25px',
            color: 'green'
        },
        h4:{
            fontSize:'30px',
            color: 'blue'
        }
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
        MuiPaper : {
            root: {
                
                backgroundColor: 'lightgray',
                border: '1px solid gray',
                padding: 30, 
                height: '70vh', 
                maxWidth: 280, 
                margin: "0 auto" 
              },
        }, 
        MuiCard : {
          root: {
              
              backgroundColor: 'blue',
              border: '1px solid white',
              padding: 30, 
              height: '70vh', 
              maxWidth: 280, 
              margin: "0 auto" 
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
            color: 'red'
          }
        }

      },
})