import React, { Fragment } from 'react';
import TabelProfil from '../utils/TabelProfil';

import PersonIcon from '@material-ui/icons/Person';
import { makeStyles  } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

// ICON
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

// img
import musik from '../assets/hobi/musik.png';
import ngoding from '../assets/hobi/ngoding.png';

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
        margin: '5px 0px 22px 0px',
        color: '#2D3A54'
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
    },
    logo: {
        fontSize: 65
    },
    desc: {
        margin: '0px auto',
        textAlign: 'center'
    },
    extendedIcon: {
        display: 'block',
    },
    wrapp: {
        textAlign: 'center'
    },
    btn: {
        fontWeight: 600,
        margin: '50px 4px 0px 4px'
    },
    tabel: {
        marginLeft: 'auto'
    },
    gambarHobi: {
        width: '100%',
        height: 'auto',
        padding: '0px 138px',
        boxSizing: 'border-box'
    }
});
  
const Profile = () => {
    const classes = useStyles();
    return (
        <Fragment>
            <Avatar className={classes.large}>
                <PersonIcon className={classes.logo}/>
            </Avatar>
            <h5 className={classes.profileHeader}>Profil Singkat</h5>
            <Grid container>
                <Grid item xs={12} sm={2}></Grid>
                <Grid item xs={12} sm={8}>
                    <p className={classes.desc}>
                    Saya adalah anak pertama dari 2 orang bersaudara, saya lulusan baru Telkom University D3 Teknik Telekomunikasi, seusai lulus kuliah saya sempat mengerjakan beberapa proyek yang saya dapatkan.
                    </p>
                </Grid>
                <Grid item xs={12} sm={2}></Grid>
            </Grid>
            <h3 className={classes.profileHead} >Tentang Saya</h3>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <TabelProfil />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className={classes.wrapp}>
                    <Link href="https://www.linkedin.com/in/thoriq-dharmawan-805809161/" underline="none" target="_blank" >
                        <Button variant="outlined" color="primary" className={classes.btn}>
                            <LinkedInIcon className={classes.extendedIcon} />
                            LinkedIn
                        </Button>
                    </Link>
                    <Link href="https://github.com/thoriqdharmawan" underline="none" target="_blank">
                        <Button variant="outlined"  color="primary" className={classes.btn}>
                            <GitHubIcon className={classes.extendedIcon} />
                            GitHub
                        </Button>
                        
                    </Link>
                    <Link href="https://www.instagram.com/thoriqd/" underline="none" target="_blank" >
                        <Button variant="outlined"  color="primary" className={classes.btn}>
                            <InstagramIcon className={classes.extendedIcon} />
                            Instagram
                        </Button>
                    </Link>
                    </div>
                </Grid>
            </Grid>
            
            <h3 className={classes.profileHead} >Hobi</h3>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <img className={classes.gambarHobi}  src={musik} alt="Hobi" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <h3>Musik</h3>
                    <p>Saya suka mendengarkan musik, saya mendengarkan musik hingga suara instrumen yang susah didengar</p>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <img className={classes.gambarHobi}  src={ngoding} alt="Hobi" />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <h3>Ngoding</h3>
                    <p>Saya suka ngoding karna saya dapat membuat suatu sistem yang saya butuhkan</p>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default Profile;