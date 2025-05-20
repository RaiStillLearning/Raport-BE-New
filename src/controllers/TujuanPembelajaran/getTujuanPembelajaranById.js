const TujuanPembelajaran = require("../../Schema/Guru/TujuanPembelajaran");

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await TujuanPembelajaran.findById(id);
    if (!data) {
      return res
        .status(404)
        .json({ status: "failed", message: "Data tidak ditemukan" });
    }
    res.json({ status: "success", data });
  } catch (error) {
    console.error("Get by ID error:", error);
    res.status(500).json({
      status: "failed",
      message: "Gagal mengambil data",
      error: error.message,
    });
  }
};

module.exports = getById;
