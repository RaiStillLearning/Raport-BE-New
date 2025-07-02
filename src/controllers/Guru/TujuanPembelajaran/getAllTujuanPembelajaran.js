const TujuanPembelajaran = require("../../../Schema/Guru/TujuanPembelajaran");

const getAllTujuanPembelajaran = async (req, res) => {
  try {
    const data = await TujuanPembelajaran.find();
    res.json({ status: "success", data });
  } catch (error) {
    console.error("Get all error:", error);
    res.status(500).json({
      status: "failed",
      message: "Gagal mengambil data",
      error: error.message,
    });
  }
};

module.exports = getAllTujuanPembelajaran;
