import React, { Fragment } from 'react';
import TabelProfil from '../utils/TabelProfil';

import FaceIcon from '@material-ui/icons/Face';
import { makeStyles  } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const useStyles =  makeStyles({
    large: {
        width: 80,
        height: 80,
        backgroundColor: '#2D3A54',
        margin: '0px auto'
    },
    profileHeader: {
        textAlign: 'center',
        fontSize: 27,
        margin: '5px 0px 22px 0px'
    },
    profileHead: {
        padding: '12px 0px',
        backgroundColor: '#2D3A54',
        textAlign: 'center',
        color: 'white',
        margin: '25px -24px'
    },
    profileTable: {
        margin: 'auto'
    },
    list: {
        textAlign: 'center',
        margin: '0px'
    }
});
  
const Profile = () => {
    const classes = useStyles();
    return (
        <Fragment>
            <Avatar className={classes.large}>
                <FaceIcon fontSize="large"/>
            </Avatar>
            <h5 className={classes.profileHeader}>Profil Singkat</h5>
            <h3 className={classes.profileHead} >About Me</h3>
            <Grid container>
                <Grid xs={12} sm={2}>
                    
                </Grid>
                <Grid xs={12} sm={4}>
                    <TabelProfil />
                </Grid>
                <Grid xs={12} sm={4}>
                    Saya adalah anak pertama dari 2 orang bersaudara, saya lulusan baru Telkom University D3 Teknologi Telekomunikasi, saya adalah orang yang suka belajar hal baru
                </Grid>
                <Grid xs={12} sm={2}>
                    
                </Grid>
            </Grid>
            
            <h3 className={classes.profileHead} >Hobi</h3>
            <p className={classes.list}>Ngoding</p>
            <p className={classes.list}>Mendengarkan Musik</p>
        </Fragment>
    )
}

export default Profile;