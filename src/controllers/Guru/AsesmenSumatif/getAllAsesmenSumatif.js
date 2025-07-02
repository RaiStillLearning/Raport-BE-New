const AsesmenSumatif = require('../../../Schema/Guru/AsesmenSumatif');

const getAllAsesmenSumatif = async (req, res) => {
  try {
    const { kelas } = req.query;

    const query = kelas ? { kelas } : {}; // ← filter jika ada query kelas
    const data = await AsesmenSumatif.find(query);

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil data', error: error.message });
  }
};

module.exports = getAllAsesmenSumatif;
