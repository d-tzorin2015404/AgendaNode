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

var Categoria = function() {
  var main = this;
  var categoriaUri = "/api/categoria/";
  main.categorias = ko.observableArray([]);

  main.eliminar = function (item) {
        var id = item.idCategoria;
        var uri = categoriaUri + id;
        ajaxHelper(uri, 'DELETE').done(function () {
            main.getCategorias();
        });
    }


  main.getCategorias = function() {
    ajaxHelper(categoriaUri, 'GET').done(function(data) {
      main.categorias(data);
      });
  }
  main.getCategorias();
}


$(document).ready(function() {
  var c = new Categoria();
  ko.applyBindings(c);
})
