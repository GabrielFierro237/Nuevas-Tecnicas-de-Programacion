const { Router } = require("express");
const data = require("../data.json");

const router = Router();

//creacion de endpoints
router
  .get("/", (req, res) => {
    res.send("Deber de Nuevas Tecnicas de Programacion");
  })
  .get("/users", (req, res) => {
    data.map((usuarios) => {
      usuarios.first_name = usuarios.first_name.toUpperCase();
      usuarios.last_name = usuarios.last_name.toUpperCase();
      return usuarios;
    });
    res.json({
      msg: "Datos del JSON en Mayusculas",
      body: { data },
    });
  })
  .get("/users-query", (req, res) => {
    const {
      query: { id },
    } = req;
    var buscarID = data.filter((usuarios) => usuarios.id == id);
    if (id == null) {
      res.json({
        msg: "Datos de todos los usuarios",
        body: [data],
      });
    } else if (id < 1) {
      res.json({
        msg: `No existe el usuario con Id: ${id}`,
        body: null,
      });
    } else if (id >10) {
      res.json({
        msg: `No existe el usuario con Id: ${id}`,
        body: null,
      });
    } else {
      res.json({
        msg: `Usuario Encontrado con el ID: ${id}`,
        body: [buscarID],
      });
    }
  })
  .get("/users-params/:apellido", (req, res) => {
    const {
      params: { apellido },
    } = req;
    var filtrarApellido = data.filter((usuarios) => usuarios.last_name == apellido);

    var traermail = filtrarApellido.map((eMail) => {
      return eMail.email;
    });

    var existe = false;

    data.forEach((usuarios) => {
      if (usuarios.last_name == apellido) {
        existe = true;
      }
    });

    if (existe === true) {
      res.json({
        msg: `Usuario encontrado con el Apellido: ${apellido}`,
        body: [traermail],
      });
    } else {
      res.json({
        msg: `No exise el usuario con Apellido: ${apellido}`,
        body: null,
      });
    }

    res.json(filtrarApellido);

    res.end();
  });

//exportamos las rutas
module.exports.RouterIndex = router;
