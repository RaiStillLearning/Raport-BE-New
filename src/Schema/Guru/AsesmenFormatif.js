const mongoose = require('mongoose');

const AsesmenFormatif = new mongoose.Schema({
    nama_siswa: { type: String, required: true },
    tp1_kktp: { type: Number, required: true, default: false },
    tp1_tampil: {type: boolean, required: true, default: false},
    tp2_kktp: { type: Number, required: true, default: false },
    tp2_tampil: {type: boolean, required: true, default: false},
    tp3_kktp: { type: Number, required: true, default: false },
    tp3_tampil: {type: boolean, required: true, default: false},
    deskripsi_tertinggi: {type: String, required: true, default: "masih kosong"},
    deskripsi_terendah: {type: String, required: true, default: "masih kosong"},
    kelas: { type: String, enum: ['X', 'XI', 'XII'], required: true },
    },
    {
        collection: 'AsesmenFormatif',
        timestamps: true,
    }

)



module.exports = mongoose.model('AsesmenFormatif', AsesmenFormatif);