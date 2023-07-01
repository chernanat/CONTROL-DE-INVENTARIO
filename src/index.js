const express = require("express");
const morgan = require("morgan");
const path = require("path");
const mysql = require("mysql");
const { PORT } = require("./config");
const inventarioRoutes = require("./routes/Inventario.routes");
const myConnection = require('express-myconnection');
const app = express();
// const DataTable = require('datatables.net-dt')
// import DataTable from 'datatables.net-dt';
 
// let table = new DataTable('#myTable');
//settings
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan("dev"));
//conexion a la db
app.use(myConnection(mysql,{
  host: "localhost",
  user: "root",
  password: "",
  port: 3306,
  database: "inventario",
}, 'single'));

app.use(express.urlencoded({ extended: false }));
app.use(inventarioRoutes);

app.listen(PORT, () => {
  console.log(`ESCUCHANDO EN EL PUERTO : ${PORT}`);
});
