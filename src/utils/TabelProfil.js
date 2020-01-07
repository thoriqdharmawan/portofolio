import React from 'react';
import { makeStyles  } from '@material-ui/core/styles';

const useStyles =  makeStyles({
    tabel: {
        margin: '0px 65px 0px auto'
    }
});
  

const TabelProfil = () => {
    const classes = useStyles();
    return (
        <table className={classes.tabel}>
            <tr>
                <td>Nama</td>
                <td>: </td>
                <td>Thoriq Dharmawan</td>
            </tr>
            <tr>
                <td>Umur</td>
                <td>: </td>
                <td>21 Tahun</td>
            </tr>
            <tr>
                <td>Telepon</td>
                <td>: </td>
                <td>+62 895 6346 89984</td>
            </tr>
            <tr>
                <td>Email</td>
                <td>: </td>
                <td>thoriqd21@gmail.com</td>
            </tr>
            <tr>
                <td>Alamat</td>
                <td>: </td>
                <td>Cilacap, Jawa Tengah</td>
            </tr>
        </table>
    )
}

export default TabelProfil;