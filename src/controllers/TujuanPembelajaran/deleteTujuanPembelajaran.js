const TujuanPembelajaran = require("../../Schema/Guru/TujuanPembelajaran");

const deleteTujuanPembelajaran = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await TujuanPembelajaran.findByIdAndDelete(id);

    if (!deleted) {
      return res
        .status(404)
        .json({ status: "failed", message: "Data tidak ditemukan" });
    }

    res.json({ status: "success", message: "Data berhasil dihapus" });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({
      status: "failed",
      message: "Gagal menghapus data",
      error: error.message,
    });
  }
};

module.exports = deleteTujuanPembelajaran;
