import React from 'react';
import Sertifikat from '../utils/Sertifikat';

// MUI
import Grid from '@material-ui/core/Grid';

const Sertifikasi = () => {
    return  (
        <Grid container spacing={2}>
            
             <Grid item xs={12} sm={12}>
                <Sertifikat 
                    judul="Software Development: Junior Programming"
                    penyelenggara="Badan Nasional Sertifikasi Profesi (BNSP)"
                    nomor="No. Reg. TIK 018 05397 2019"
                />
                <Sertifikat 
                    judul="Dasar Pemrograman Web"
                    penyelenggara="Dicoding | tahun 2019"
                    nomor="www.dicoding.com/users/454436/academies"
                />
                <Sertifikat 
                    judul="Junior Web Developer"
                    penyelenggara="Digital Talent Kominfo"
                    nomor="Tahun 2019"
                />
                <Sertifikat 
                    judul="English Proficiency Test (EPrT)"
                    penyelenggara="Language Center Telkom University | Score : 457"
                    nomor="No. SP1 13520/BHS.0/2019"
                />
                <Sertifikat 
                    judul="Certified Secure Computer user (CSCU)"
                    penyelenggara="Netkrom Academy"
                    nomor="Certificated Code: NET_CSCU_AA298"
                />
             </Grid>
        </Grid>
    )
}

export default Sertifikasi;