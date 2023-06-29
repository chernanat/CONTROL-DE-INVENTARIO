const express = require("express");
const morgan = require("morgan");
const mysql = require("mysql");
const { PORT } = require("./config");
const inventarioRoutes = require("./routes/Inventario.routes");
const app = express();

app.use(morgan("dev"));

app.use(inventarioRoutes);

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "inventario",
});

app.listen(PORT, () => {
  console.log(`ESCUCHANDO EN EL PUERTO : ${PORT}`);
});
