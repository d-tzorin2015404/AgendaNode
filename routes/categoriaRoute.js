var express = require('express');
var Categoria = require('../model/categoria');
var router = express.Router();

router.get('/api/categoria/', function(req, res) {
  Categoria.selectAll(function(error, resultados){
    if(typeof resultados !== undefined) {
      res.json(resultados);
    } else {
      res.json({"Mensaje": "No hay Categorias"});
    }
  });
});



router.get('/api/categoria/:idCategoria',
  function(req, res) {
    var idCategoria = req.params.idCategoria;
    Categoria.select(idCategoria,
      function(error, resultados){
      if(typeof resultados !== undefined) {
        res.json(resultados);
      } else {
        res.json({"Mensaje": "No hay categorias"});
      }
  });
});

router.post('/api/categoria', function(req, res) {
  var data = {
    idCategoria : null,
    nombreCategoria: req.body.nombreCategoria
  }
  Categoria.insert(data, function(err, resultado) {
    if(resultado && resultado.insertId > 0) {
      res.redirect('/categorias');
    } else {
      res.json({"Mensaje": "No se ingreso la Prioridad"});
    }
  });
});

router.put('/api/categoria/:idCategoria', function(req, res) {
  var idCategoria = req.params.idCategoria;
  var data = {
    idCategoria : req.body.idCategoria,
    nombreCategoria: req.body.nombreCategoria
  }

  if(idCategoria === data.idCategoria) {
    Categoria.update(data, function(err, resultado) {
      if(resultado !== undefined) {
        res.json(resultado);
      } else {
        res.json({"Mensaje": "No se modifico la categoria"});
      }
    });
  } else {
    res.json({"Mensaje": "No concuerdan los datos"});
  }
});

router.delete('/api/categoria/:idCategoria',
  function(req, res) {
    var idCategoria = req.params.idCategoria;
    Categoria.delete(idCategoria,
      function(error, resultado){
      if(resultado && resultado.Mensaje === "Eliminado") {
        res.redirect("/api/categoria");
      } else {
        res.json({"Mensaje": "No se puede eliminar"});
      }
  });
});


module.exports = router;
