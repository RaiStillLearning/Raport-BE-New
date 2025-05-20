const LingkupMateri = require("../../../Schema/Guru/LingkupMateri");

const getAllLingkupMateri = async (req, res) => {
  try {
    const data = await LingkupMateri.find();
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

module.exports = getAllLingkupMateri;
