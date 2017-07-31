var express = require('express');
var Prioridad = require('../model/prioridad');
var router = express.Router();

router.get('/api/prioridad/', function(req, res) {
  Prioridad.selectAll(function(error, resultados){
    if(typeof resultados !== undefined) {
      res.json(resultados);
    } else {
      res.json({"Mensaje": "No hay Prioridads"});
    }
  });
});



router.get('/api/prioridad/:idPrioridad',
  function(req, res) {
    var idPrioridad = req.params.idPrioridad;
    Prioridad.select(idPrioridad,
      function(error, resultados){
      if(typeof resultados !== undefined) {
        res.json(resultados);
      } else {
        res.json({"Mensaje": "No hay Prioridads"});
      }
  });
});

router.post('/api/prioridad', function(req, res) {
  var data = {
    idPrioridad : null,
    nombre: req.body.nombre
  }
  Prioridad.insert(data, function(err, resultado) {
    if(resultado && resultado.insertId > 0) {
      res.redirect('/Prioridades');
    } else {
      res.json({"Mensaje": "No se ingreso la Prioridad"});
    }
  });
});

router.put('/api/Prioridad/:idPrioridad', function(req, res) {
  var idPrioridad = req.params.idPrioridad;
  var data = {
    idPrioridad : req.body.idPrioridad,
    nombre: req.body.nombre
  }

  if(idPrioridad === data.idPrioridad) {
    Prioridad.update(data, function(err, resultado) {
      if(resultado !== undefined) {
        res.json(resultado);
      } else {
        res.json({"Mensaje": "No se modifico la Prioridad"});
      }
    });
  } else {
    res.json({"Mensaje": "No concuerdan los datos"});
  }
});

router.delete('/api/prioridad/:idPrioridad',
  function(req, res) {
    var idPrioridad = req.params.idPrioridad;
    Prioridad.delete(idPrioridad,
      function(error, resultado){
      if(resultado && resultado.Mensaje === "Eliminado") {
        res.redirect("/api/Prioridad");
      } else {
        res.json({"Mensaje": "No se puede eliminar"});
      }
  });
});


module.exports = router;
