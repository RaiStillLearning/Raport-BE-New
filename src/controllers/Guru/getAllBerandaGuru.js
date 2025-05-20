const BerandaGuru = require("../../Schema/Guru/BerandaGuru");

const getAllBerandaGuru = async (req, res) => {
  try {
    const data = await BerandaGuru.find();
    res.status(200).json({
      status: "success",
      message: "Berhasil mengambil semua data beranda guru",
      data,
    });
  } catch (err) {
    res.status(500).json({
      status: "failed",
      message: "Gagal mengambil data",
      error: err.message,
    });
  }
};

module.exports = getAllBerandaGuru;
