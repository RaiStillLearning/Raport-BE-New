const AsesmenFormatif = require('../../../Schema/Guru/AsesmenFormatif');

const getAllAsesmenFormatif = async (req, res) => {
  try {
    const { kelas } = req.query;

    const query = kelas ? { kelas } : {}; // ← filter jika ada query kelas
    const data = await AsesmenFormatif.find(query);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil data', error: error.message });
  }
};

module.exports = getAllAsesmenFormatif;
