const Swal = require('sweetalert2')

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
            if(err){
              if(err.code == 'ER_DUP_ENTRY'){
                Swal.fire({
                  title: 'Error!',
                  text: 'ESTE CODIGO YA EXISTE',
                  icon: 'error',
                  confirmButtonText: 'CONTINUAR'
                });
              }
            }
        });
        res.redirect('/')
    })
};

//primero obtendremos el item antes de actualizar
const getItem = (req,res)=>{
  const id = req.params.id;
  req.getConnection((err, conn)=>{
    conn.query('SELECT * FROM productos WHERE codigo = ?', [id], (err, producto)=>{
      res.render('pages/edit', {
        item: producto
      });
    });
  });
};

//En este metodo actualizaremos un item del inventario
const updateItem = (req,res) => {
  const id = req.params.id;
  const data = req.body;
  req.getConnection((err, conn)=>{
      conn.query('UPDATE productos set ? WHERE codigo = ?', [data, id], (err, rows)=>{
      res.redirect('/')
    })
  })
};

//En este metodo borraremos un item del inventario
const deleteItem = (req,res) => {
    const id = req.params.id;
    req.getConnection((err, conn)=>{
        conn.query('DELETE FROM productos WHERE codigo = ?', [id], (err, eliminated)=>{
            res.redirect('/');
        })
    })
};

module.exports = {
  index,
  saveItem,
  getItem,
  updateItem,
  deleteItem,
};
