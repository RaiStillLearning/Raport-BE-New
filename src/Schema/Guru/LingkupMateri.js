const mongoose = require("mongoose");

const LingkupMateri = new mongoose.Schema(
  {
    no: Number,
    tingkat: String,
    lingkup_materi: String,
  },
  {
    collection: "lingkup_materi",
  }
);

const ModelLingkupMateri = mongoose.model(
  "Lingkupmateri",
  LingkupMateri
);

module.exports = ModelLingkupMateri;
