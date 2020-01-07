import React from 'react';
// MUI
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';


const useStyles = makeStyles({
    icon: {
        backgroundColor: '#2D3A54',
    },
    text: {
        padding: 22,
        boxSizing: 'border-box'
    },
    large: {
        width: '60px',
        height: '60px',
        margin: '30px auto',
        backgroundColor: 'white'
    },
    wrapper: {
        border: 'none',
        boxShadow: '0px 4px 4px rgba(45, 58, 84, 0.200)',
        height: 'auto',
        marginBottom: 25
    },
    sertifikatTitle: {
        fontSize: '25px',
        fontWeight: '600'
    },
    subtitle: {
        marginTop: -8
    }
});


const Sertifikat = ({judul, penyelenggara, nomor}) => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
             <Grid container>
                <Grid className={classes.icon} item xs={12} sm={3}>
                    <Avatar className={classes.large} >
                        <LocalActivityIcon color="primary" fontSize="large"/>
                    </Avatar>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <div className={classes.text}>
                        <Typography className={classes.sertifikatTitle} color="primary" >
                           {judul}
                        </Typography>
                        <Typography className={classes.subtitle}  >
                            {penyelenggara}
                        </Typography>
                        <Typography  >
                            {nomor}
                        </Typography>
                    </div>
                </Grid>
             </Grid>
        </div>
    )
}

export default Sertifikat;