const AsesmenSumatif = require('../../../Schema/Guru/AsesmenSumatif')


const addAsesmenSumatif = async (req, res) => {
  try {
    const {
      nama_siswa,
      sumatif1 = 0,
      sumatif2 = 0,
      sumatif3 = 0,
      pts = 0,
      pas = 0,
      kelas,
    } = req.body;

    if (!nama_siswa || !kelas) {
      return res.status(400).json({ message: 'Nama siswa dan kelas wajib diisi' });
    }

    const newAsesmen = new AsesmenSumatif({
      nama_siswa,
      sumatif1,
      sumatif2,
      sumatif3,
      pts,
      pas,
      kelas,
    });

    const savedAsesmen = await newAsesmen.save();

    res.status(201).json({ message: 'Data berhasil ditambahkan', data: savedAsesmen });
  } catch (error) {
    console.error('Error adding AsesmenSumatif:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = addAsesmenSumatif;