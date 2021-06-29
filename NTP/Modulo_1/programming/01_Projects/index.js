const { query } = require("express");
const express = require("express");

//genero una aplicacion express
const app = express();
//ruotes

const { RouterIndex } = require("./routes/index");

app.use("/", RouterIndex);

app.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});

//http://localhost:3000/saludo?nombre=Gabriel&apellido=Fierro
