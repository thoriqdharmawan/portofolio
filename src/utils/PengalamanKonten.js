import React from 'react';

import { makeStyles  } from '@material-ui/core/styles';

const useStyles =  makeStyles({
    wrapper: {
        marginBottom: 0
    }
});

const PengalamanKonten = () => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}></div>
    )
}

export default PengalamanKonten;