const Swal = require("sweetalert2");

//aqui listaremos los articulos de cada inventario
const index = (req, res) => {
  const query = "SELECT * FROM productos";
  req.getConnection((err, conn) => {
    conn.query(query, (err, products) => {
      let total = 0;
      let cantidad = 0;
      for (let i = 0; i < products.length; i++) {
        total = total + products[i].cantidad * products[i].precio;
        cantidad = cantidad + products[i].cantidad;
      }
      if (err) console.log(err);
      res.render("pages/index", {
        data: products,
        data2: total,
        data3: cantidad,
      });
    });
    if (err) console.log(err);
  });
};

// en este metodo almacenaremos un item
const saveItem = (req, res) => {
  const data = req.body;
  req.getConnection((err, conn) => {
    conn.query("INSERT INTO productos set ?", [data], (err, producto) => {
      if (err) {
        console.log(err);
        if (err.code == "ER_DUP_ENTRY") {
          console.log("error del duplicado");
          res.redirect("/", {
            err: err_data.title,
          });
          // res.render("pages/index", {err: err_data})
        }
      }
    });
    res.redirect("/");
  });
};

//primero obtendremos el item antes de actualizar
const getItem = (req, res) => {
  const id = req.params.id;
  req.getConnection((err, conn) => {
    conn.query(
      "SELECT * FROM productos WHERE id = ?",
      [id],
      (err, producto) => {
        res.render("pages/edit", {
          item: producto,
        });
      }
    );
  });
};

//En este metodo actualizaremos un item del inventario
const updateItem = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  req.getConnection((err, conn) => {
    conn.query(
      "UPDATE productos set ? WHERE id = ?",
      [data, id],
      (err, rows) => {
        res.redirect("/");
      }
    );
  });
};

//En este metodo borraremos un item del inventario
const deleteItem = (req, res) => {
  const id = req.params.id;
  req.getConnection((err, conn) => {
    conn.query(
      "DELETE FROM productos WHERE id = ?",
      [id],
      (err, eliminated) => {
        res.redirect("/");
      }
    );
  });
};

module.exports = {
  index,
  saveItem,
  getItem,
  updateItem,
  deleteItem,
};
