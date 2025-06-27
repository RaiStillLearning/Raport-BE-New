const TujuanPembelajaran = require("../../Schema/Guru/TujuanPembelajaran");

const addTujuanPembelajaran = async (req, res) => {
  try {
    const { no, tingkat, tujuan_pembelajaran } = req.body;

    const newTujuanPembelajaran = new TujuanPembelajaran({
      no,
      tingkat,
      tujuan_pembelajaran,
    });
    await newTujuanPembelajaran.save();

    return res.status(201).json({
      status: "success",
      message: "Data berhasil ditambahkan", 
      data: newTujuanPembelajaran,
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

module.exports = addTujuanPembelajaran;
