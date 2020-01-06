import React, { Fragment } from 'react';
import ProfileContent from '../utils/ProfileContent';
import { makeStyles  } from '@material-ui/core/styles';

// MUI
import InfoIcon from '@material-ui/icons/Info';
import Typography from '@material-ui/core/Typography';

const useStyles =  makeStyles({
    avatar: {
      backgroundColor: '#2D3A54',
      border: 'none'
    },
    titleContent: {
        display: 'inline-block',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: '-6px'
    },
    bodyContent: {
        marginLeft: 55,
        paddingTop: 5
    }
});

const Pengalaman = () => {
    const classes = useStyles();
    return (
        <Fragment>
            <ProfileContent 
                icon={
                    <InfoIcon />
                } 
                titleContent="PT Telkom Cilacap" 
                subTitleContent="Magang | Support | 2015" 
                bodyContent={
                    <Typography variant="body2" color="primary" component="p">
                        Melakukan migrasi kabel fiber optik, melakukan perancangan jalur menggunakan AutoCAD, Melakukan pendataan pengguna.
                    </Typography>
                }
            />
            <ProfileContent 
                icon={
                    <InfoIcon />
                } 
                titleContent="PT Radar Telekomunikasi Indonesia" 
                subTitleContent="Magang | Support | 2019" 
                bodyContent={
                    <Typography variant="body2" color="primary" component="p">
                        Pembangunan perangkat sistem komunikasi jarak jauh menggunakan LoRa untuk evakuasi bencana alam.
                    </Typography>
                }
            />
            <ProfileContent 
                icon={
                    <InfoIcon />
                } 
                titleContent='Assisten Praktikum "Laboratorium RLK" Telkom University'
                subTitleContent="Kepala Divisi Hardware | 2017 - 2018" 
                bodyContent={
                    <Typography variant="body2" color="primary" component="p">
                        Mengajarkan materi praktek kepada adik tingkat, melakukan riset laboratorium, melakukan perawatan dan pendataan perangkat laboratorium
                    </Typography>
                }
            />
            <ProfileContent 
                icon={
                    <InfoIcon />
                } 
                titleContent='Assisten Praktikum "Laboratorium B.J. Multimedia" Telkom University'
                subTitleContent="Anggota Divisi Praktikum | 2019" 
                bodyContent={
                    <Typography variant="body2" color="primary" component="p">
                        Mengajarkan materi praktek kepada adik tingkat menggunakan softfare editing seperti Adobe Photoshop, Adobe Ilustrator, Adobe After Effect. selain itu mengajarkan pembuatan program sederhana menggunakan Matlab
                    </Typography>
                }
            />
        </Fragment>
    )
}

export default Pengalaman;