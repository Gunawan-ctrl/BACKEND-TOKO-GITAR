const router = require("express").Router();
const kategoriController = require("../controllers/kategoriController");

router.post("/input", (req, res) => {
  kategoriController.input(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.json(error);
    });
});

router.get("/get-all-kategori", (req, res) => {
  kategoriController.getAllKategori()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.json(error);
    });
});

router.get("/get-kategori-by-id/:idKategori", (req, res) => {
  kategoriController.getKategoriById(req.params.idKategori)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.json(error);
    });
});

router.put("/update/:idKategori", (req, res) => {
  kategoriController.update(req.params.idKategori, req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.json(error)
    });
});

router.delete("/delete/:idKategori", (req, res) => {
  kategoriController.delete(req.params.idKategori)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.json(error);
    });
});

module.exports = router;