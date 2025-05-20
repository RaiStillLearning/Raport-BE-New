const Siswa = require("../../../Schema/Guru/Siswa");

const addSiswa = async (req, res) => {
  try {
    const { nama, absen, kelas_id } = req.body; // ambil data dari request body

    // Buat objek baru dari model
    const newSiswa = new Siswa({
      nama,
      absen,
      kelas_id,
    });

    // Simpan ke MongoDB
    await newSiswa.save();

    return res.status(201).json({
      status: "success",
      message: "Data berhasil ditambahkan",
      data: newSiswa,
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

module.exports = addSiswa;
