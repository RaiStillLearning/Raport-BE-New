const LingkupMateri = require("../../../Schema/Guru/LingkupMateri");

const addLingkupMateri = async (req, res) => {
  try {
    const { no, tingkat, lingkup_materi  } = req.body;

    const newLingkupMateri = new LingkupMateri({
      no,
      tingkat,
      lingkup_materi,
    });
    await newLingkupMateri.save();

    return res.status(201).json({
      status: "success",
      message: "Data berhasil ditambahkan",
      data: newLingkupMateri,
    });
  } catch (error) {
    console.error("error saat memuat data:", error);
    return res.status(500).json({
      status: "failed",
      message: "Gagal menambahkan data ke beranda",
      error: error.message,
    });
  }
};

module.exports = addLingkupMateri;
