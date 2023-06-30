const express = require("express");
const morgan = require("morgan");
const path = require("path");
const mysql = require("mysql");
const { PORT } = require("./config");
const inventarioRoutes = require("./routes/Inventario.routes");
const app = express();

//settings
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(inventarioRoutes);

//db connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "inventario",
});

app.listen(PORT, () => {
  console.log(`ESCUCHANDO EN EL PUERTO : ${PORT}`);
});
