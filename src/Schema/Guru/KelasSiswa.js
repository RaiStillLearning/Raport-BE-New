const mongoose = require("mongoose");

const KelasSiswa = new mongoose.Schema(
  {
    nama_kelas: {
      type: String,
      required: true,
    },
    wali_kelas: {
      type: String,
      default: "-",
    },
  },
  {
    collection: "DataSiswa",
  }
);

const ModelKelas = mongoose.model("Kelas", KelasSiswa);
module.exports = ModelKelas;
