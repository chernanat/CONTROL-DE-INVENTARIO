//listar los usuarios
const getUsers = (req, res) => {
  const query = "SELECT * FROM clientes";
  req.getConnection((err, conn) => {
    conn.query(query, (err, clientes) => {
      let total = 0;
      for (let i = 0; i < clientes.length; i++) {
        total += 1;
      }
      if (err) console.log(err);
      res.render("pages/index.user.ejs", {
        data: clientes,
        data2: total,
      });
    });
    if (err) console.log(err);
  });
};

//almacenar usuario
const saveUser = (req, res) => {
  const user = req.body;
  console.log(user);
  req.getConnection((err, conn) => {
    conn.query("INSERT INTO clientes set ?", [user], (err, cliente) => {
      if (err) console.log(err);
    });
    if (err) console.log(err);
    res.redirect("/users");
  });
};

const getUser = (req, res) => {
  const id = req.params.id;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM clientes WHERE id = ?", [id], (err, cliente) => {
      res.render("pages/edit.user.ejs", {
        cliente: cliente,
      });
    });
    if (err) console.log(err);
  });
};

const updateUser = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  console.log(data, id);
  req.getConnection((err, conn) => {
    conn.query(
      "UPDATE clientes set ? WHERE id = ?",
      [data, id],
      (err, rows) => {
        res.redirect("/users");
      }
    );
  });
};

const deleteUser = (req, res) => {
  const id = req.params.id;
  req.getConnection((err, conn) => {
    conn.query(
      "DELETE FROM clientes WHERE id = ?",
      [id],
      (err, eliminated) => {
        res.redirect("/users");
      }
    );
  });
};

module.exports = {
  getUsers,
  saveUser,
  getUser,
  updateUser,
  deleteUser,
};
