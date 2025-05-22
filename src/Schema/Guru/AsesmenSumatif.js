const mongoose = require('mongoose');

const AsesmenSumatif = new mongoose.Schema({
  nama_siswa: { type: String, required: true },
  sumatif1: { type: Number, required: true, default: 0 },
  sumatif2: { type: Number, required: true, default: 0 },
  sumatif3: { type: Number, required: true, default: 0 },
  pts: { type: Number, default: 0 },
  pas: { type: Number, default: 0 },
  kelas: { type: String, enum: ['X', 'XI', 'XII'], required: true },
}, 
{
  collection: 'AsesmenSumatif',
  timestamps: true,
});

module.exports = mongoose.model('AsesmenSumatif', AsesmenSumatif);
