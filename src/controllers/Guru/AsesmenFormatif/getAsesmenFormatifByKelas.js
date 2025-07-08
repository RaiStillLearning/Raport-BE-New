const AsesmenFormatif = require('../../../Schema/Guru/AsesmenFormatif');

const getAsesmenSumatifByKelas = async (req, res) => {
      try {
        const { kelas } = req.params;
    
        if (!['X', 'XI', 'XII'].includes(kelas)) {
          return res.status(400).json({ message: 'Kelas tidak valid' });
        }
    
        const data = await AsesmenFormatif.find({ kelas });
        res.status(200).json(data);
      } catch (error) {
        res.status(500).json({ message: 'Gagal mengambil data berdasarkan kelas', error: error.message });
      }
}

module.exports = getAsesmenSumatifByKelas;