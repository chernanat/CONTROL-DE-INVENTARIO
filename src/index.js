const express = require("express");
const morgan = require("morgan");
const { PORT } = require("./config");
const inventarioRoutes = require("./routes/Inventario.routes");
const app = express();

app.use(morgan("dev"));

app.use(inventarioRoutes);

app.listen(PORT, () => {
  console.log(`ESCUCHANDO EN EL PUERTO : ${PORT}`);
});
