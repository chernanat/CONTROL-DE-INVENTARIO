const express = require("express");
const { index, saveItem } = require("../controller/inventario.controller");

const router = express.Router();

router.get("/", index);

router.post('/save', saveItem)

module.exports = router;
