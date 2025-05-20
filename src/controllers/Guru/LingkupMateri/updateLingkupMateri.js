const LingkupMateri = require("../../../Schema/Guru/LingkupMateri");

const updateLingkupMateri = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = await LingkupMateri.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updated) {
      return res
        .status(404)
        .json({ status: "failed", message: "Data tidak ditemukan" });
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

module.exports = updateLingkupMateri;
