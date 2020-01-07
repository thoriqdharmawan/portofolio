import React from 'react';
import TextLoop from "react-text-loop";
// MUI
import Button from '@material-ui/core/Button';
import { makeStyles  } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';



const useStyles =  makeStyles({
    wrapper: {
        textAlign: 'center'
    },
    welcomeTitle: {
        color: '#B3B2BE',
        fontSize: 21,
        marginTop: '-35px',
        fontWeight: '200'
    },
    welcomeHeadline: {
        color: '#2D3A54',
        fontSize: 37,
        fontWeight: '600'
    },
    welcomeParagraph: {
        fontSize: '19px',
        fontStyle: 'italic',
        padding: '41px 0px',
        margin: '31px -24px',
        color: 'white',
        backgroundColor: '#2D3A54'
    },
    welcomeContact: {
        margin: 0
    },
    welcomeEmail: {
        margin: 0,
        fontWeight: '300'
    },
    welcomeButton: {
        marginTop: 28,
        padding: '10px 40px'
    },
    span: {
        color: '#A950A1'
    },
    center: {
        textAlign: 'center'
    },
    link: {
        display: 'block',
        fontWeight: 500,
        fontSize: '13px',
        marginTop: '9px'
    }, 
    space: {
        marginRight: '20px'
    }
});

const Welcome = () => {
    const classes = useStyles();

    return (
        <div color="primary" className={classes.wrapper}>
            <h2 className={classes.welcomeHeadline}>Hai, Saya adalah{" "}
                <TextLoop interval={1500}>
                    <span className={classes.span}> Thoriq Dharmawan</span>
                    <span className={classes.span}> Web Developer</span>
                    <span className={classes.span}> UI/UX Designer</span>
                </TextLoop>
            </h2>   
            <h4 className={classes.welcomeTitle}>Portofolio Thoriq Dharmawan</h4>
            <p className={classes.welcomeParagraph}>"I always give the best effort for each projects I did. I give a solution with my creative app."</p> 
            <h4 className={classes.welcomeContact}>+62 895 6346 89984</h4>
            <h4 className={classes.welcomeEmail}>thoriqd21@gmail.com</h4>
            <Link href="#" target="_blank">
                <Button className={classes.welcomeButton} variant="contained" color="primary">
                    Download CV
                </Button>
            </Link>
            <Link href="#" target="_blank" className={classes.link}>
                Download Berkas Pendukung 
            </Link>
        </div>
    )
}

export default Welcome;