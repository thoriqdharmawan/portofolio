import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// MUI
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    galeri: {
        width: 'auto',
        height: '100%',
        display: 'inline-block',
    }
});

const Galeri = ({src1, src2, src3, src4}) => {
    const classes = useStyles();

    return (
        <Carousel width="auto"
            infiniteLoop 
            centerMode
            autoPlay 
            emulateTouch
            showArrows={false}
            showStatus={false}
        >
            <div>
                <img className={classes.galeri}  src={src1} alt="FotoThoriq" />
            </div>
            <div >
                <img className={classes.galeri}  src={src2} alt="FotoThoriq" />
            </div>
            <div >
                <img className={classes.galeri}  src={src3} alt="FotoThoriq" />
            </div>
            <div >
                <img className={classes.galeri}  src={src4} alt="FotoThoriq" />
            </div>
        </Carousel>
    )
}

export default Galeri;