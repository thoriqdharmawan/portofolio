import React from 'react';

// MUI
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    logo: {
        width: 'auto',
        height: '25px',
        marginRight: '28px',
        marginBottom: '14px',
    }
});

const Teknologi = ({judul, sumber}) => {
    const classes = useStyles();
    return (
        <Tooltip title={judul} placement="top" arrow TransitionComponent={Zoom}>
            <img className={classes.logo}  src={sumber} alt="Teknologi" />
        </Tooltip>
    )
}

export default Teknologi;