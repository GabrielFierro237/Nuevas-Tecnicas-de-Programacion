const { Router } = require("express");
const data = require("../data.json");

const router = Router();

//creacion de endpoints
router
  .get("/", (req, res) => {
    res.send("Hola mundo con ExpressJs");
  })
  .get("/saludo", (req, res) => {
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
