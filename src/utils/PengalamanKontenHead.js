import React from 'react';
import { makeStyles  } from '@material-ui/core/styles';

const useStyles =  makeStyles({
    heading: {
        textAlign: 'center',
        margin: '0px -24px 32px -24px',
        backgroundColor: '#2D3A54',
        color: 'white'
    },
});


const PengalamanKontenHead = ({head}) => {
    const classes = useStyles();

    return (
        <h1 className={classes.heading}>{head}</h1>
    )
}

export default PengalamanKontenHead;