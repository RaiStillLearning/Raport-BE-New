const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bcrypt = require("bcrypt"); // ✅ Tambahkan ini
const AsesmenSumatif = require("./src/Schema/Guru/AsesmenSumatif");

require("dotenv").config();

// koneksi ke frontend
app.use(
  cors({
    origin: "http://localhost:5173", // Ganti sesuai port React
    credentials: true, // kalau butuh cookie/session
  })
);

// parsing json dari body
app.use(express.json())

// tes koneksi awal
app.get("/", (req, res) => {
  res.send("Berhasil Terhubung ke Server");
});

// koneksi ke MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("✅ Berhasil Terhubung ke MongoDB"))
  .catch((err) => console.log("❌ Gagal Terhubung ke MongoDB", err));

// import models dan routes
const userModel = require("./src/models/userRegister");
const authRoute = require("./src/middleware/auth");
const userRoute = require("./src/routes/User");
const getUsers = require("./src/controllers/getUser");
//import models beranda tampilan guru
const addBerandaGuru = require("./src/controllers/Guru/addBerandaGuru");
const getAllBerandaGuru = require("./src/controllers/Guru/getAllBerandaGuru");
const getBerandaGuruById = require("./src/controllers/Guru/getBerandaGuruById");
//import models pesertadidik
const addSiswa = require("./src/controllers/Guru/DataSiswa/addSiswa");
const getAllSiswa = require("./src/controllers/Guru/DataSiswa/getAllSiswa");
const getAllSiswaByAbsen = require("./src/controllers/Guru/DataSiswa/getSiswaByAbsen");
const addKelas = require("./src/controllers/Guru/DataKelas/addKelas");
const getAllKelas = require("./src/controllers/Guru/DataKelas/getAllKelas");
const getKelasById = require("./src/controllers/Guru/DataKelas/getKelasById");
//Tujuan Pembelajaran import models schema CRUD
const addTujuanPembelajaran = require("./src/controllers/TujuanPembelajaran/addTujuanPembelajaran");
const getAllTujuanPembelajaran = require("./src/controllers/TujuanPembelajaran/getAllTujuanPembelajaran");
const getTujuanPembelajaranById = require("./src/controllers/TujuanPembelajaran/getTujuanPembelajaranById");
const updateTujuanPembelajaran = require("./src/controllers/TujuanPembelajaran/updateTujuanPembelajaran");
const deleteTujuanPembelajaran = require("./src/controllers/TujuanPembelajaran/deleteTujuanPembelajaran");
//lingkup materi routes
const addLingkupMateri = require("./src/controllers/Guru/LingkupMateri/addLingkupMateri");
const getAllLingkupMateri = require("./src/controllers/Guru/LingkupMateri/getAllLingkupMateri");
const getLingkupMateriById = require("./src/controllers/Guru/LingkupMateri/getLingkupMateriById");
const deleteLingkupMateri = require("./src/controllers/Guru/LingkupMateri/deleteLingkupMateri");
const updateLingkupMateri = require("./src/controllers/Guru/LingkupMateri/updateLingkupMateri");
//asesmen sumatif routes
const addAsesmenSumatif = require("./src/controllers/AsesmenSumatif/addAsesmenSumatif");
const getAllAsesmenSumatif = require("./src/controllers/AsesmenSumatif/getAllAsesmenSumatif");
const getAsesmenSumatifByKelas = require("./src/controllers/AsesmenSumatif/getAsesmenSumatifByKelas");
const patchAsesmenSumatif = require("./src/controllers/AsesmenSumatif/patchAsesmenSumatif");
//logic login post method
app.post("/register", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Field tidak boleh kosong" });
    }

    // cek email duplikat
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email sudah digunakan" });
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // simpan user baru
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
      role: role || "guest",
    });

    const savedUser = await newUser.save();
    res.status(201).json({
      message: "Berhasil mendaftar",
      user: {
        _id: savedUser._id,
        name: savedUser.name,
        email: savedUser.email,
        role: savedUser.role,
      },
    });
  } catch (err) {
    console.error("❌ Register error:", err);
    res.status(500).json({
      message: "Gagal mendaftar",
      error: err.message || err.toString(),
    });
  }
});

//login logic tanpa memanggil file lain
app.post("/login", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Name, email, dan password wajib diisi" });
    }

    // Cari user berdasarkan name dan email
    const user = await userModel.findOne({ name, email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "Name, email, atau password salah" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(400)
        .json({ message: "Name, email, atau password salah" });
    }

    // Kalau pakai rememberMe bisa bikin logic khusus di sini (misal set cookie, token exp, dsb)
    // Tapi untuk sekarang, kita cuma kirim response biasa

    res.status(200).json({
      message: "Login berhasil",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
    console.log("Login attempt:", { name, email });
    console.log("User found:", user);
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// pakai routes lainnya
app.use("/auth", authRoute);
app.use("/user", userRoute);
app.get("/users", getUsers);
//beranda guru routes
app.post("/nilaiBeranda", addBerandaGuru);
app.get("/nilaiBeranda", getAllBerandaGuru);
app.get("/nilaiBeranda/:id", getBerandaGuruById);
//refrensi routes peserta didik
app.post("/Siswa", addSiswa);
app.get("/Siswa", getAllSiswa);
app.get("/Siswa:absen", getAllSiswaByAbsen);
app.post("/Kelas", addKelas);
app.get("/Kelas", getAllKelas);
app.get("/Kelas/:id", getKelasById);
//tujuan pembelajaran route CRUD
app.post("/Tujuanpembelajaran", addTujuanPembelajaran);
app.get("/Tujuanpembelajaran", getAllTujuanPembelajaran);
app.get("/Tujuanpembelajaran/:id", getTujuanPembelajaranById);
app.patch("/Tujuanpembelajaran/:id", updateTujuanPembelajaran);
app.delete("/Tujuanpembelajaran/:id", deleteTujuanPembelajaran);
//lingkup materi CRUD routes
app.post("/Lingkupmateri", addLingkupMateri)
app.get("/Lingkupmateri", getAllLingkupMateri)
app.get("/Lingkupmateri/:id", getLingkupMateriById)
app.delete("/Lingkupmateri/:id", deleteLingkupMateri)
app.patch("/Lingkupmateri/:id", updateLingkupMateri)
//asesmen sumatif routes
app.post('/AsesmenSumatif', addAsesmenSumatif)
app.get('/AsesmenSumatif', getAllAsesmenSumatif)
app.get("/AsesmenSumatif/:kelas", getAsesmenSumatifByKelas)
app.patch('/AsesmenSumatif/:id', patchAsesmenSumatif);


// run server
app.listen(5000, () => {
  console.log("🚀 Server is running on port 5000");
  console.log("🌐 http://localhost:5000");
});
