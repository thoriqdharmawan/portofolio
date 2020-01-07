import React, { Fragment } from 'react';
import PengalamanKonten from '../utils/PengalamanKonten';
import PengalamanKontenHead from '../utils/PengalamanKontenHead';
import PengalamanKontenBody from '../utils/PengalamanKontenBody';

// MUI
import InfoIcon from '@material-ui/icons/Info';

// img
import digitaltalent from '../assets/perusahaan/digitaltalent.png';
import hmdt from '../assets/perusahaan/hmdt.png';
import netkrom from '../assets/perusahaan/netkrom.jpg';
import rlk from '../assets/perusahaan/rlk.png';
import rti from '../assets/perusahaan/rti.png';
import telkom from '../assets/perusahaan/telkom.png';

const Pengalaman = () => {
    return (
        <Fragment>
            <PengalamanKonten />
                <PengalamanKontenHead head="Pengalaman Magang"/>
                <PengalamanKontenBody 
                    icon={
                        <InfoIcon />
                    }
                    title="PT Radar Telekomunikasi Indonesia"
                    info="Magang | tahun 2019"
                    body="Riset mengenai LoRa untuk pembuatan perangkat IoT komunikasi jarak jauh pada lokasi bencana alam"
                    gambar={rti}
                    />
                <PengalamanKontenBody 
                    icon={
                        <InfoIcon />
                    }
                    title="PT Telkom Cilacap"
                    info="Magang | tahun 2018"
                    body="Melakukan perbaikan jaringan, pemasangan jaringan, serta perawatan jaringan yang sesuai standar yang baik, serta melakukan pengolahan data data user"
                    gambar={telkom}
                    />
                <PengalamanKontenBody 
                    icon={
                        <InfoIcon />
                    }
                    title="PT Telkom Cilacap"
                    info="Magang | tahun 2015"
                    body="Melakukan perencanaan dan perancangan jalur Fiber Optik dengan menggunakan software AutoCAD, melakukan migrasi Fiber Optik, melakukan perbaikan jaringan"
                    gambar={telkom}
                    />
            <PengalamanKonten/>

            <PengalamanKonten />
                <PengalamanKontenHead head="Pengalaman Organisasi"/>
                <PengalamanKontenBody 
                    icon={
                        <InfoIcon />
                    }
                    title="Asisten Praktikum Elektronika Analog"
                    info="Kepala Divisi Hardware | tahun 2018 - 2019"
                    body="Mengajarkan materi kepada adik tingkat, serta melakukan riset dan perawatan perangkat laboratorium"
                    gambar={rlk}
                    />
                <PengalamanKontenBody 
                    icon={
                        <InfoIcon />
                    }
                    title="Asisten Praktikum Rangkaian Listrik"
                    info="Anggota Divisi Hardware | tahun 2017 - 2018"
                    body="Mengajarkan materi kepada adik tingkat, serta melakukan riset dan perawatan perangkat elektronika analog"
                    gambar={rlk}
                    />
                <PengalamanKontenBody 
                    icon={
                        <InfoIcon />
                    }
                    title="Staff Muda HMDT Telkom University"
                    info="Anggota Departemen Riset dan Teknologi | tahun 2016 - 2018"
                    body="Menjalankan program kerja himpunan antara lain mengadakan responsi, riset, dan study banding ke universitas/prodi lain"
                    gambar={hmdt}
                    />
            <PengalamanKonten/>

            <PengalamanKonten />
                <PengalamanKontenHead head="Pelatihan"/>
                <PengalamanKontenBody 
                    icon={
                        <InfoIcon />
                    }
                    title="Certified Secure Computer user (CSCU)"
                    info="Pelatihan Keamanan Jaringan | tahun 2019"
                    body="Belajar mengenai teknik teknik pengamanan jaringan komputer, mulai dari hardware hingga software"
                    gambar={netkrom}
                    />
                <PengalamanKontenBody 
                    icon={
                        <InfoIcon />
                    }
                    title="Digital Talent Scholarship"
                    info="Pelatihan pengembangan web | tahun 2019"
                    body="belajar mengenai pembuatan aplikasi web serta metode pembuatan web yang lebih efektif dan interaktif"
                    gambar={digitaltalent}
                    />
            <PengalamanKonten/>
        </Fragment>
    )
}

export default Pengalaman;