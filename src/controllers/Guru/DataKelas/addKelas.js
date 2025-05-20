const KelasSiswa = require("../../../Schema/Guru/KelasSiswa");

const addKelas = async (req, res) => {
  try {
    const { nama_kelas, wali_kelas = "-" } = req.body;

    const newKelasSiswa = new KelasSiswa({
      nama_kelas,
      wali_kelas,
    });

    await newKelasSiswa.save();

    return res.status(201).json({
      status: "success",
      message: "Data berhasil ditambahkan",
      data: newKelasSiswa,
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

module.exports = addKelas;
