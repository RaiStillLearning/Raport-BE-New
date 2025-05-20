const BerandaGuru = require("../../Schema/Guru/BerandaGuru");

const AddBerandaGuru = async (req, res) => {
  try {
    const {
      no,
      mata_pelajaran,
      rombel,
      wali_kelas,
      jmi_peserta_didik,
      jmi_peserta_didik_dinilai,
      detail,
    } = req.body; // ambil data dari request body

    // Buat objek baru dari model
    const newBeranda = new BerandaGuru({
      no,
      mata_pelajaran,
      rombel,
      wali_kelas,
      jmi_peserta_didik,
      jmi_peserta_didik_dinilai,
      detail,
    });

    // Simpan ke MongoDB
    await newBeranda.save();

    return res.status(201).json({
      status: "success",
      message: "Data berhasil ditambahkan",
      data: newBeranda,
    });
  } catch (error) {
    console.error("error saat memuat data:", error);
    return res.status(500).json({
      status: "failed",
      message: "Gagal menambahkan data ke beranda",
      error: error.message,
    });
  }
};

module.exports = AddBerandaGuru;
