const mongoose = require("mongoose");

const TujuanPembelajaran = new mongoose.Schema(
  {
    no: Number,
    tingkat: String,
    tujuan_pembelajaran: String,
  },
  {
    collection: "tujuan_pembelajaran",
  }
);

const ModelTujuanPembelajaran = mongoose.model(
  "Tujuanpembelajaran",
  TujuanPembelajaran
);

module.exports = ModelTujuanPembelajaran;
