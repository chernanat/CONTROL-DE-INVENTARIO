const express = require("express");

//aqui listaremos los articulos de cada inventario
const index = (req, res) => {
  const query = "SELECT * FROM productos";
  req.getConnection((err, conn) => {
    conn.query(query, (err, products) => {
      if (err) console.log(err);
      res.render("pages/index", {
        data: products,
      });
    });
    if (err) console.log(err);;
  });
};

// en este metodo almacenaremos un item
const saveItem = (req,res) => {
    const data = req.body;
    req.getConnection((err, conn)=>{
        conn.query('INSERT INTO productos set ?', [data], (err, producto)=>{
            console.log(producto);
            if(err) console.log(err);
        });
        res.redirect('/')
    })
};

//En este metodo actualizaremos un item del inventario
const updateItem = () => {};

//En este metodo borraremos un item del inventario
const deleteItem = () => {};

module.exports = {
  index,
  saveItem,
  updateItem,
  deleteItem,
};
