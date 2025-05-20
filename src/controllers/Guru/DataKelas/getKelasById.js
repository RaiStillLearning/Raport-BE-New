const KelasSiswa = require("../../../Schema/Guru/KelasSiswa");
const Siswa = require("../../../Schema/Guru/Siswa");

const getKelasById = async (req, res) => {
  try {
    const { id } = req.params;

    // Ambil data kelas
    const kelas = await KelasSiswa.findById(id);
    if (!kelas) {
      return res.status(404).json({
        status: "failed",
        message: "Kelas tidak ditemukan",
      });
    }

    // Ambil semua siswa yang punya kelas_id sama
    const siswaDalamKelas = await Siswa.find({ kelas_id: id });

    return res.status(200).json({
      status: "success",
      data: {
        kelas,
        siswa: siswaDalamKelas,
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed",
      message: "Gagal mengambil data kelas dan siswa",
      error: error.message,
    });
  }
};

module.exports = getKelasById;
