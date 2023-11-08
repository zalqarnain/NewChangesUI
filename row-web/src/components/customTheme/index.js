import { createTheme, ThemeProvider } from "@mui/material/styles";

export const customTheme=createTheme({

    // palette: {
    //     primary: {
    //         main: "#1976d2",
    //         // main: "#ec2121",
    //     },
    //     secondary: {
    //         main: "#448717"
    //     }
    // },

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
       

          contained: {
            backgroundColor: '#7997FB',
          },
        },
        
        MuiTextField : {
          outlined: {
                
                backgroundColor: '#F2F2F2',
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