const express = require("express");
const { index } = require("../controller/inventario.controller");

const router = express.Router();

router.get("/", index);

module.exports = router;
