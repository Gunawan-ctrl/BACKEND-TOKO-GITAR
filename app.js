const express = require("express");
const app = express();
const dbConfig = require("./config/db_config");
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect( dbConfig.mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Terhubung ke Mongodb");
}).catch((err) => {
  console.log(err);
  console.log("Gagal terhubung ke Mongodb");
});

app.use("/users", require("./routes/userRoute"));
app.use("/kategori", require("./routes/kategoriRoute"));
app.use("/barang", require("./routes/barangRoute"));

app.listen(3000, () => {
  console.log("Server telah dijalankan di port 3000");
});
