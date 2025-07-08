const AsesmenFormatif = require('../../../Schema/Guru/AsesmenFormatif');

const updateAsesmenFormatif = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await AsesmenFormatif.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true, // ✅ disarankan supaya validasi tetap jalan
    });

    if (!updated) {
      return res.status(404).json({
        status: "failed",
        message: "Data tidak ditemukan",
      });
    }

    res.json({
      status: "success",
      message: "Data berhasil diupdate",
      data: updated,
    });
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({
      status: "failed",
      message: "Gagal update data",
      error: error.message,
    });
  }
};

module.exports = updateAsesmenFormatif;
