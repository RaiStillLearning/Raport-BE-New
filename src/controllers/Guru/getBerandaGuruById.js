const BerandaGuru = require("../../Schema/Guru/BerandaGuru");

const getBerandaGuruById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await BerandaGuru.findById(id);

    if (!data) {
      return res.status(404).json({
        status: "not_found",
        message: "Data dengan ID tersebut tidak ditemukan",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Data berhasil ditemukan",
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

module.exports = getBerandaGuruById;
