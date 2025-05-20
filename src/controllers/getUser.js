const Register = require("../models/userRegister");

const getUsers = async (req, res) => {
  try {
    const { role, email } = req.query; // filter berdasarkan role atau email jika ada

    let query = {};
    if (role) {
      query.role = role;
    }
    if (email) {
      query.email = email;
    }

    const users = await Register.find(query);

    return res.status(200).json({
      status: "success",
      message: "Data user berhasil diambil",
      data: users,
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({
      status: "failed",
      message: "Terjadi kesalahan saat mengambil data user",
      error: error.message,
    });
  }
};

module.exports = getUsers;
