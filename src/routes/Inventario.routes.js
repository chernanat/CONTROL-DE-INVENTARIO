const express = require("express");
const { index, saveItem, deleteItem } = require("../controller/inventario.controller");

const router = express.Router();

router.get("/", index);

router.post('/save', saveItem);

router.get('/delete/:id', deleteItem);

module.exports = router;
