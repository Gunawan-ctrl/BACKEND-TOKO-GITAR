const mongoose = require("mongoose");
const objectId = require("mongoose").Types.ObjectId;

const barangShema = new mongoose.Schema({
  namaBarang: {
    type: String
  },
  harga: {
    type: Number
  },
  stok: {
    type: Number
  },
  idKategori: {
    type: objectId
  },
  gambar: {
    type: String
  }
})

module.exports = mongoose.model("barang", barangShema);
