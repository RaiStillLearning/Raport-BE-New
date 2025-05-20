const Siswa = require("../../../Schema/Guru/Siswa");

const getSiswaByAbsen = async (req, res) => {
  try {
    const absen = parseInt(req.params.absen);
    const siswa = await Siswa.findOne({ absen });

    if (!siswa) {
      return res.status(404).json({
        status: "failed",
        message: "Siswa dengan absen tersebut tidak ditemukan",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Siswa ditemukan",
      data: siswa,
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed",
      message: "Gagal mengambil data siswa",
      error: error.message,
    });
  }
};

module.exports = getSiswaByAbsen;
