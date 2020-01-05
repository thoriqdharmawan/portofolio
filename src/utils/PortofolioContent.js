import React from 'react';
import Galeri from '../utils/Galeri';

// MUI
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    portofolioWrapper: {
        width: '100%',
        marginLeft: '14px'
    },
    stylejudul: {
        color: '#2D3A54',
        marginBottom: '-2px'
    },
    stylerole: {

    },
    styledeskripsi: {
        margin: '31px 0px'
    },
    styleteknologi: {

    }
});

const PortofolioContent = ({judul, role, deskripsi, teknologi}) => {
    const classes = useStyles();
    return (
        <div className={classes.portofolioWrapper}>
            <h1 className={classes.stylejudul}>{judul}</h1>
            <span className={classes.stylerole}>Role : {role}</span>
            <p className={classes.styledeskripsi}>{deskripsi}</p>
            <h3>Teknologi yang digunakan</h3>
            <div className={classes.styleteknologi}>
                {teknologi}
            </div>
        </div>
    )
}

export default PortofolioContent;