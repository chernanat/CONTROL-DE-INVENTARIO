const express = require("express");
const { index, saveItem, deleteItem, updateItem, getItem } = require("../controller/inventario.controller");

const router = express.Router();

router.get("/", index);

router.post('/save', saveItem);

router.get('/edit/:id', getItem)

router.post('/edit/:id', updateItem);

router.get('/delete/:id', deleteItem);

module.exports = router;
