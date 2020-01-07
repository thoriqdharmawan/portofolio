import React, { Fragment } from 'react';
import Zoom from '@material-ui/core/Zoom';
import Tooltip from '@material-ui/core/Tooltip';

const KeahlianKonten = ({judul, img}) => {
    return (
        <Fragment>
            <Tooltip title={judul} placement="top" arrow TransitionComponent={Zoom}>
                {img}
            </Tooltip>
        </Fragment>
    )
}

export default KeahlianKonten;