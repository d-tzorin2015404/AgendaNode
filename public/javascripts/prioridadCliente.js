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

var Prioridad = function() {
  var main = this;
  var prioridadUri = "/api/prioridad/";
  main.prioridades = ko.observableArray([]);
main.tipoCargado = ko.observable([]);

      main.editar = function (formElement) {
        var tipoEditado = {
            idPrioridad: main.tipoCargado().idPrioridad,
            nombre: main.tipoCargado().nombre
        }
        var uri = prioridadUri + tipoEditado.idPrioridad;
        ajaxHelper(uri, 'PUT', tipoEditado)
            .done(function (data) {
                main.getPrioridades();
                $("#modalEditarPrioridad").modal('hide');
            })
    }
    main.eliminar = function (item) {
        var id = item.idPrioridad;
        var uri = prioridadUri + id;
        ajaxHelper(uri, 'DELETE').done(function () {
            main.getPrioridades();
        });
    }

  main.getPrioridades = function() {
    ajaxHelper(prioridadUri, 'GET').done(function(data) {
      main.prioridades(data);
      });
  }
  main.getPrioridades();
}


$(document).ready(function() {
  var p = new Prioridad();
  ko.applyBindings(p);
})
