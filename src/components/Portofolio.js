import React, { Fragment } from 'react';
import Galeri from '../utils/Galeri';
import PortofolioContent from '../utils/PortofolioContent';
import Teknologi from '../utils/Teknologi';

// MUI
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
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
import sbadmin from '../assets/logo/sbadmin.png';

// ss
import photoOne from '../assets/galeri/1.png';
import photoTwo from '../assets/galeri/2.png';
import film from '../assets/galeri/film.jpg';
import filmSeats from '../assets/galeri/filmSeats.jpg';
import notes11 from '../assets/galeri/notes11.jpg';
import notes12 from '../assets/galeri/notes12.jpg';
import notes21 from '../assets/galeri/notes21.jpg';
import notes22 from '../assets/galeri/notes22.jpg';
import social1 from '../assets/galeri/social1.jpg';
import social21 from '../assets/galeri/social21.jpg';
import social22 from '../assets/galeri/social22.jpg';
import social3 from '../assets/galeri/social3.jpg';
import ciadmin1 from '../assets/galeri/ciadmin1.png';
import cilogin from '../assets/galeri/cilogin.png';
import cisignup from '../assets/galeri/cisignup.png';
import ciuser from '../assets/galeri/ciuser.png';

const useStyles = makeStyles({
    logo: {
        width: 'auto',
        height: '25px',
        marginRight: '20px'
    },
    fieldBox: {
        marginBottom: '25px'
    }
});

const Portofolio = () => {
    const classes = useStyles();
    return (
        <Fragment>
            <Grid className={classes.fieldBox} container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <PortofolioContent 
                        judul="Social Media"
                        role="Fullstack"
                        deskripsi="Pembuatan aplikasi sosial media menggunakan Node.js, Firebase, dan React.js, aplikasi ini mempunyai berbagai macam fitur seperti: Login, Signup, Edit profil (foto, bio, dan lokasi), Posting, Like posting, Comment posting, Delete posting"
                        teknologi={
                            <div>
                                <Teknologi judul="Node.js" sumber={nodejs} />
                                <Teknologi judul="Express.js" sumber={expressjs} />
                                <Teknologi judul="Firebase" sumber={firebase} />
                                <Teknologi judul="React.js" sumber={Reactjs} />
                                <Teknologi judul="Redux" sumber={redux} />
                                <Teknologi judul="React Router" sumber={reactRouter} />
                                <Teknologi judul="Materialize-UI" sumber={materializeUI} />
                                <Teknologi judul="GIT" sumber={git} />
                            </div>
                        }
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Galeri 
                        src1={social1}
                        src2={social21}
                        src3={social22}
                        src4={social3}
                    />
                </Grid>
            </Grid>

            <Grid className={classes.fieldBox} container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <PortofolioContent 
                        judul="Fully Login System"
                        role="Fullstack"
                        deskripsi="Pembuatan sistem login lengkap dengan validasi Login dan Signup, dan terdapat 2 tingkatan pengguna yang berbeda, yaitu: admin, user. Selain itu aplikasi ini juga dapat menambahkan, mengubah, dan menghapus menu yang ada"
                        teknologi={
                            <div>
                                <Teknologi judul="PHP" sumber={php} />
                                <Teknologi judul="Codeigniter" sumber={codeigniter} />
                                <Teknologi judul="MySql" sumber={mysql} />
                                <Teknologi judul="jQuery" sumber={jquery} />
                                <Teknologi judul="Bootstrap" sumber={bootstrap} />
                                <Teknologi judul="SBAdmin" sumber={sbadmin} />
                            </div>
                        }
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Galeri 
                        src1={ciadmin1}
                        src2={cilogin}
                        src3={cisignup}
                        src4={ciuser}
                    />
                </Grid>
            </Grid>

            <Grid className={classes.fieldBox} container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <PortofolioContent 
                        judul="Authenticated Notes"
                        role="Fullstack"
                        deskripsi="Pembuatan aplikasi note online dengan mengguanakan fitur autentikasi, note yang dibuat dapat diedit dan dihapus."
                        teknologi={
                            <div>
                                <Teknologi judul="Firebase" sumber={firebase} />
                                <Teknologi judul="React Router" sumber={reactRouter} />
                                <Teknologi judul="React.js" sumber={Reactjs} />
                                <Teknologi judul="Redux" sumber={redux} />
                            </div>
                        }
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Galeri 
                        src1={notes11}
                        src2={notes12}
                        src3={notes21}
                        src4={notes22}
                    />
                </Grid>
            </Grid>

            <Grid className={classes.fieldBox} container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <PortofolioContent 
                        judul="Online Booking Film"
                        role="UI/UX Designer"
                        deskripsi="Pembuatan desain mengguanakn software Adobe XD dan dilanjutkan dengan mengguanakn Adobe PhotoShop untuk pembuatan mockups."
                        teknologi={
                            <div>
                                <Teknologi judul="Adobe XD" sumber={adobexd} />
                                <Teknologi judul="Adobe PhotoShop" sumber={photoshop} />
                            </div>
                        }
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Galeri 
                        src1={photoOne}
                        src2={photoTwo}
                        src3={film}
                        src4={filmSeats}
                    />
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default Portofolio;