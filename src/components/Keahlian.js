import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import KeahlianKonten from '../utils/KeahlianKonten';
import Grid from '@material-ui/core/Grid';

// LOGO
import materializeUI from '../assets/logo/materializeUI.png';
import reactRouter from '../assets/logo/reactRouter.png';
import adobexd from '../assets/logo/adobexd.png';
import photoshop from '../assets/logo/photoshop.png';
import Reactjs from '../assets/logo/Reactjs.png';
import firebase from '../assets/logo/firebase.png';
import nodejs from '../assets/logo/nodejs.png';
import expressjs from '../assets/logo/expressjs.png';
import redux from '../assets/logo/redux.png';
import git from '../assets/logo/git.png';
import php from '../assets/logo/php.png';
import codeigniter from '../assets/logo/codeigniter.png';
import mysql from '../assets/logo/mysql.png';
import jquery from '../assets/logo/jquery.png';
import bootstrap from '../assets/logo/bootstrap.png';
import html from '../assets/logo/html.png';
import css from '../assets/logo/css.png';
import javascript from '../assets/logo/javascript.png';
import vscode from '../assets/logo/vscode.png';
import postman from '../assets/logo/postman.png';

const useStyles = makeStyles({
    logo: {
        width: 'auto',
        height: '45px',
        marginRight: '28px',
        marginBottom: '14px',
    },
    center: {
        textAlign: 'center'
    },
    wrapper: {
        textAlign: 'center',
        // width: 800,
        height: 'auto',
        margin: '60px auto'
    }
});

const Keahlian = () => {
    const classes = useStyles();
    return (
        <Fragment>
            <Grid container>
                <Grid item xs={12} sm={1}></Grid>
                <Grid item xs={12} sm={10}>
                    <h1 className={classes.center}>Terbiasa Dengan</h1>
                    <div className={classes.wrapper}>
                        <KeahlianKonten 
                            judul="PHP"
                            img={
                                <img className={classes.logo}  src={php} alt="Teknologi" />
                            }
                        />
                        <KeahlianKonten 
                            judul="NodeJS"
                            img={
                                <img className={classes.logo}  src={nodejs} alt="Teknologi" />
                            }
                        />
                        <KeahlianKonten 
                            judul="Javascript"
                            img={
                                <img className={classes.logo}  src={javascript} alt="Teknologi" />
                            }
                        />
                        <KeahlianKonten 
                            judul="HTML"
                            img={
                                <img className={classes.logo}  src={html} alt="Teknologi" />
                            }
                        />
                        <KeahlianKonten 
                            judul="CSS"
                            img={
                                <img className={classes.logo}  src={css} alt="Teknologi" />
                            }
                        />
                        <KeahlianKonten 
                            judul="jQuery"
                            img={
                                <img className={classes.logo}  src={jquery} alt="Teknologi" />
                            }
                        />
                        <KeahlianKonten 
                            judul="MySql"
                            img={
                                <img className={classes.logo}  src={mysql} alt="Teknologi" />
                            }
                        />
                        <KeahlianKonten 
                            judul="Firebase"
                            img={
                                <img className={classes.logo}  src={firebase} alt="Teknologi" />
                            }
                        />
                        <KeahlianKonten 
                            judul="React Router"
                            img={
                                <img className={classes.logo}  src={reactRouter} alt="Teknologi" />
                            }
                        />
                        <KeahlianKonten 
                            judul="Bootstrap"
                            img={
                                <img className={classes.logo}  src={bootstrap} alt="Teknologi" />
                            }
                        />
                        <KeahlianKonten 
                            judul="ExpressJs"
                            img={
                                <img className={classes.logo}  src={expressjs} alt="Teknologi" />
                            }
                        />
                        <KeahlianKonten 
                            judul="ReactJs"
                            img={
                                <img className={classes.logo}  src={Reactjs} alt="Teknologi" />
                            }
                        />
                        <KeahlianKonten 
                            judul="Codeigniter"
                            img={
                                <img className={classes.logo}  src={codeigniter} alt="Teknologi" />
                            }
                        />
                        <KeahlianKonten 
                            judul="Redux"
                            img={
                                <img className={classes.logo}  src={redux} alt="Teknologi" />
                            }
                        />
                        <KeahlianKonten 
                            judul="GIT"
                            img={
                                <img className={classes.logo}  src={git} alt="Teknologi" />
                            }
                        />
                        <KeahlianKonten 
                            judul="Materialize-UI"
                            img={
                                <img className={classes.logo}  src={materializeUI} alt="Teknologi" />
                            }
                        />
                        <KeahlianKonten 
                            judul="Adobe XD"
                            img={
                                <img className={classes.logo}  src={adobexd} alt="Teknologi" />
                            }
                        />
                        <KeahlianKonten 
                            judul="Adobe Photoshop"
                            img={
                                <img className={classes.logo}  src={photoshop} alt="Teknologi" />
                            }
                        />
                        <KeahlianKonten 
                            judul="Visual Studio Code"
                            img={
                                <img className={classes.logo}  src={vscode} alt="Teknologi" />
                            }
                        />
                        <KeahlianKonten 
                            judul="Postman"
                            img={
                                <img className={classes.logo}  src={postman} alt="Teknologi" />
                            }
                        />
                    </div>
                </Grid>
                <Grid item xs={12} sm={1}></Grid>
            </Grid>
        </Fragment>
    )
}

export default Keahlian;