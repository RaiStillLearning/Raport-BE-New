const KelasSiswa = require("../../../Schema/Guru/KelasSiswa");

const getAllKelas = async (req, res) => {
  try {
    const semuaKelas = await KelasSiswa.find(); // ambil semua data kelas

    return res.status(200).json({
      status: "success",
      message: "Berhasil mengambil semua data kelas",
      data: semuaKelas,
    });
  } catch (error) {
    console.error("Gagal mengambil data kelas:", error);
    return res.status(500).json({
      status: "failed",
      message: "Terjadi kesalahan saat mengambil data kelas",
      error: error.message,
    });
  }
};

module.exports = getAllKelas;
