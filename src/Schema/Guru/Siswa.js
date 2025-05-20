const mongoose = require("mongoose");

const Siswa = new mongoose.Schema(
  {
    nama: String,
    absen: Number,
    kelas_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Kelas",
      required: true,
    },
  },
  {
    collection: "DataSiswa",
  }
);

const ModelSiswa = mongoose.model("Siswa", Siswa);

module.exports = ModelSiswa;
