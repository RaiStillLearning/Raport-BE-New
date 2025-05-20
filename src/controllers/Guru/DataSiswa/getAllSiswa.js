const Siswa = require("../../../Schema/Guru/Siswa");

const getAllSiswa = async (req, res) => {
  try {
    const data = await Siswa.find();
    return res.status(200).json({
      status: "success",
      message: "Data siswa ditemukan",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      status: "failed",
      message: "Gagal mengambil data siswa",
      error: error.message,
    });
  }
};

module.exports = getAllSiswa;
