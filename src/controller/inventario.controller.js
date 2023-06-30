const express = require("express");

//aqui listaremos los articulos de cada inventario
const index = (req,res) => {
    res.render('pages/index');
};

// en este metodo almacenaremos un item
const saveItem = () => {

};

//En este metodo actualizaremos un item del inventario
const updateItem = () => {

};

//En este metodo borraremos un item del inventario
const deleteItem = () => {

};

module.exports = {
    index,
    saveItem,
    updateItem,
    deleteItem
}
