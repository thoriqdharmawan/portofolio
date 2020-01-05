import React from 'react';
import TextLoop from "react-text-loop";
// MUI
import Button from '@material-ui/core/Button';
import { makeStyles  } from '@material-ui/core/styles';

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
        margin: '60px 0px'
    },
    welcomeContact: {
        margin: 0
    },
    welcomeButton: {
        marginTop: 50,
        padding: '10px 40px'
    },
    span: {
        color: '#A950A1'
    }
});

const Welcome = () => {
    const classes = useStyles();
    // const [user, setUser] = useState('Bambang')
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
            <h4 className={classes.welcomeContact}>thoriqd21@gmail.com</h4>
            <Button className={classes.welcomeButton} variant="contained" color="primary">
                Download CV
            </Button>
        </div>
    )
}

export default Welcome;