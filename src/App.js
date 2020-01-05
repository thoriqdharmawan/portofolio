import React from 'react';
import './App.css';
import SimpleTabs from './pages/SimpleTabs';
import photo from './assets/photo/thoriq.jpg';

// MUI
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#576176',
      main: '#2D3A54',
      dark: '#1f283a',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ba73b3',
      main: '#A950A1',
      dark: '#763870',
      contrastText: '#fff',
    },
  }
});

const useStyles = makeStyles({
  boxContent: {
    maxHeight: '600px',
    background: 'linear-gradient(to bottom, #2D3A54 20%, #fff 1px)',
    paddingTop: 50,
    
  },
  fieldBox: {
    maxWidth: 1300,
    maxHeight: 550,
    margin: 'auto',
    border: 'none',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.246)'
  },
  fieldPhoto: {
    width: 'auto',
    height: '100%',
    padding : '25px',
    boxSizing: 'border-box',
    backgroundImage: 'linear-gradient(6deg, #2D3A54, #A851A0)'
  },
  photo: {
    width: '100%',
  }
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.boxContent}>
        <Grid className={classes.fieldBox} container>
          <Grid item xs={12} sm={3}>
            <div className={classes.fieldPhoto}>
                <img className={classes.photo} src={photo} alt="FotoThoriq" />
            </div>
          </Grid>
          <Grid item xs={12} sm={9}>
            <SimpleTabs />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
