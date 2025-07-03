const AsesmenFormatif = require('../../../Schema/Guru/AsesmenFormatif');

const addAsesmenFormatif = async (req, res) => {
    try {
        const {
           nama_siswa,
           tp1_kktp = 0,
              tp1_tampil = false,
              tp2_kktp = 0,
                tp2_tampil = false,
                tp3_kktp = 0,
                    tp3_tampil = false,
                    deskripsi_tertinggi = "masih kosong",
                    deskripsi_terendah = "masih kosong",
            kelas,
        } = req.body;
        
        if (!nama_siswa || !kelas) {
            return res.status(400).json({ message: 'Nama siswa dan kelas wajib diisi' });
        }
        const newAsesmen = new AsesmenFormatif({
            nama_siswa,
            tp1_kktp,
            tp1_tampil,
            tp2_kktp,
            tp2_tampil,
            tp3_kktp,
            tp3_tampil,
            deskripsi_tertinggi,
            deskripsi_terendah,
            kelas,
        });
        
        const savedAsesmen = await newAsesmen.save();
        
    res.status(201).json({ message: 'Data berhasil ditambahkan', data: savedAsesmen });
  } catch (error) {
    console.error('Error adding AsesmenSumatif:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
    }

}
module.exports = addAsesmenFormatif;