import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import photoOne from '../assets/galeri/1.png';
import photoTwo from '../assets/galeri/2.png';
// import photoThree from '../assets/galeri/m1.png';
// import photoFour from '../assets/galeri/m2.png';
// import photoFive from '../assets/galeri/m3.png';

// MUI
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    galeri: {
        width: 'auto',
        height: 'auto',
        display: 'inline-block'
    },
    imgWrapper: {
        height: '300px'
    },
    one: {
        backgroundColor: 'red',
        display: 'inline-block',
        height: 200,
        width: 100
    }
});

const Galeri = () => {
    const classes = useStyles();
    return (
        <Carousel 
            infiniteLoop 
            centerMode
            autoPlay 
            emulateTouch
            showArrows={false}
            showThumbs={false}
            showStatus={false}
        >
            <div className={classes.imgWrapper}>
                <img className={classes.galeri}  src={photoOne} alt="FotoThoriq" />
           </div>
            <div >
                <img className={classes.galeri}  src={photoTwo} alt="FotoThoriq" />
           </div>
        </Carousel>
    )
}

export default Galeri;