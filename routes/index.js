var express = require('express');
var Autenticacion = require('../helper/autenticacion');
var router = express.Router();
var auth = new Autenticacion();

router.get('/', function(req, res, next) {
  auth.autorizar(req);
  res.render(auth.getPath() + 'index');
});

router.get('/autenticar', function(req, res, next) {
  res.render('default/autenticar');
});

router.get('/registrar', function(req, res, next) {
  res.render('default/registrar');
});

router.get('/categorias', function(req, res, next) {
  res.render('dashboard/categorias');
});

router.get('/tareas', function(req, res, next) {
  res.render('dashboard/Tarea');
});

router.get('/contactos', function(req, res, next) {
  res.render('dashboard/contactos');
});

router.get('/prioridades', function(req, res, next) {
  res.render('dashboard/prioridades');
});

router.get('/cerrar', function(req, res) {
  res.clearCookie('idUsuario');
  res.clearCookie('nick');
  res.redirect('/');
});

module.exports = router;
