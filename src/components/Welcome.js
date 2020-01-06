import React,  { useState } from 'react';
import TextLoop from "react-text-loop";
// MUI
import Button from '@material-ui/core/Button';
import { makeStyles  } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

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
        marginTop: 50,
        padding: '10px 40px'
    },
    span: {
        color: '#A950A1'
    }
});

const Welcome = () => {
    const classes = useStyles();
    const [name, setName] = useState('Andi');
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div color="primary" className={classes.wrapper}>
            <h2 className={classes.welcomeHeadline}>Hai{name}, Saya adalah{" "}
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
            <Button onClick={handleOpen} className={classes.welcomeButton} variant="contained" color="primary">
                Download CV
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                fullWidth={true}
                maxWidth="md"
                aria-labelledby="max-width-dialog-title"
            >
                <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                    Hai :D
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Bolehkah saya tau nama anda?
                    </DialogContentText>
                </DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                />
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Tidak
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Kirim
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Welcome;