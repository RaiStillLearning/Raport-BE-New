const mongoose = require("mongoose");

const BerandaGuru = new mongoose.Schema(
  {
    no: Number,
    mata_pelajaran: String,
    rombel: String,
    wali_kelas: String,
    jmi_peserta_didik: String,
    jmi_peserta_didik_dinilai: String,
    detail: String,
  },
  {
    collection: "beranda",
  }
);
console.log(BerandaGuru.body);
const ModelBeranda = mongoose.model("nilaiBeranda", BerandaGuru);

module.exports = ModelBeranda;
