import React, { Fragment } from 'react';
import Galeri from '../utils/Galeri';
import PortofolioContent from '../utils/PortofolioContent';

// MUI
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

// LOGO
import materializeUI from '../assets/logo/materializeUI.png';
import reactRouter from '../assets/logo/reactRouter.png';

const useStyles = makeStyles({
    logo: {
        width: 'auto',
        height: '50px'
    }
});

const Portofolio = () => {
    const classes = useStyles();
    return (
        <Grid className={classes.fieldBox} container spacing={2}>
          <Grid item xs={12} sm={6}>
              <PortofolioContent 
                judul="Online Booking Film"
                role="UI/UX Designer"
                deskripsi="Pembuatan desain mengguanakn software Adobe DX dan dilanjutkan dengan mengguanakn Adobe PhotoShop untuk pembuatan mockups."
                teknologi={
                    <div>
                        <img className={classes.logo}  src={materializeUI} alt="FotoThoriq" />
                        <img className={classes.logo}  src={reactRouter} alt="FotoThoriq" />
                    </div>
                }
              />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Galeri />
          </Grid>
        </Grid>
    )
}

export default Portofolio;