function ajaxHelper(uri, method, data) {
  return $.ajax({
    url: uri,
    type: method,
    dataType: 'json',
    contentType: 'application/json',
    data: data ? JSON.stringify(data) : null
  }).fail(function(jqXHR, textStatus, errorThrown){
    console.log(errorThrown);
  });
}

var Contacto = function() {
  var main = this;
  var contactoUri = "http://localhost:3000/api/usuario";
  main.usuarios = ko.observableArray([]);

  main.getUsuarios = function() {
    ajaxHelper(contactoUri, 'GET').done(function(data) {
      main.usuarios(data);
      });
  }
  main.getUsuarios();
}


$(document).ready(function() {
  var contacto = new Contacto();
  ko.applyBindings(contacto);
})
