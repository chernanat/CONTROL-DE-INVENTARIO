const express = require("express");
const morgan = require("morgan");
const path = require("path");
const mysql = require("mysql");
const { PORT, HOST, USER, PASSWORD, DB_PORT, DATABASE_NAME } = require("./config");
const inventarioRoutes = require("./routes/Inventario.routes");
const myConnection = require('express-myconnection');
const app = express();
 
//settings
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan("dev"));
//conexion a la db
app.use(myConnection(mysql,{
  host: HOST,
  user: USER,
  password: PASSWORD,
  port: DB_PORT,
  database: DATABASE_NAME,
}, 'single'));

app.use(express.urlencoded({ extended: false }));
app.use(inventarioRoutes);

app.listen(PORT, () => {
  console.log(`ESCUCHANDO EN EL PUERTO : ${PORT}`);
});
