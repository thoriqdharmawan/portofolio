import React from 'react';

import { makeStyles  } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';

const useStyles =  makeStyles({
    avatar: {
        backgroundColor: '#2D3A54',
        marginLeft: 'auto'
    },
    title: {
        margin: 0,
        fontSize: 26
    },
    body: {
        margin: '17px 0px'
    },
    logo: {
        width: 137,
        height: 137,
        marginLeft: '100px'
    }
});


const PengalamanKontenBody = ({icon, title, info, body, gambar}) => {
    const classes = useStyles();
    return (
        <Grid className={classes.fieldBox} container spacing={2}>
            <Grid item xs={2} sm={1}>
                <Avatar className={classes.avatar} color="primary" >
                    {icon}
                </Avatar>
            </Grid>
            <Grid item xs={10} sm={7}>
                <div>
                    <h2 className={classes.title}>{title}</h2>
                    <span  className={classes.span}>{info}</span>
                    <p className={classes.body}>{body}</p>
                </div>
            </Grid>
            <Grid item xs={12} sm={4}>
                <img className={classes.logo}  src={gambar} alt="Company" />
            </Grid>
        </Grid>
    )
}

export default PengalamanKontenBody;