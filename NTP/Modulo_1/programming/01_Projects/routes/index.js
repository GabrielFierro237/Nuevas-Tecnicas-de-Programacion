const { Router } = require("express");
const data = require("../data.json");
const { User } = require("../lib/Schema/User");
const { DataValidator } = require('../middlewares/DataValidator')


const router = Router();

//creacion de endpoints
router
  .get("/", (req, res) => {
    res.send("Hola Mundo con expressjs");
  })
  .get("/saludo", DataValidator("query", User), (req, res) => {
    //console.log(req.query);
    const {
      query: { nombre, apellido },
    } = req;
    res.json({
      saludo: `hola soy ${nombre} ${apellido}`,
    });
  })

  /*
    res.json({
      msg: "Lista de personas",
      body: data
    });
  */
  .get("/saludo/:nombre", (req, res) => {
    const { params } = req;
    res.json({
      nombre: params.nombre,
    });
  });

//exportamos las rutas
module.exports.RouterIndex = router;

// module = {
//   exports: {
//     RouterIndex: router,
//   },
// };
