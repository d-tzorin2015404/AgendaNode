var database = require('./database');
var Prioridad = {};

Prioridad.selectAll = function(callback) {
  if(database) {
    database.query("SELECT * FROM Prioridad",
    function(error, resultados) {
      if(error) {
        throw error;
      } else {
        callback(null, resultados);
      }
    });//Fin query
  }//Fin IF
}//FIN SelectAll

Prioridad.select = function(idPrioridad, callback) {
  if(database) {
    var sql = "SELECT * FROM Prioridad WHERE idPrioridad = ?";
    database.query(sql, idPrioridad,
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, resultado);
      }
    });//Fin query
  }//Fin IF
}//FIN SelectAll

Prioridad.insert = function(data, callback) {
  if(database) {
    database.query("INSERT INTO Prioridad SET ? ", data,
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, {"insertId": resultado.insertId});
      }
    });//Fin query
  }//Fin IF
}//FIN SelectAll

Prioridad.update = function(data, callback) {
  if(database) {
    var sql = "UPDATE Prioridad SET "
    +"nombrePrioridad = ? WHERE idPrioridad = ?";
    database.query(sql,
    [data.nombre, data.idPrioridad],
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, {"insertId": resultado.insertId});
      }
    });//Fin query
  }//Fin IF
}//FIN SelectAll

Prioridad.delete = function(idPrioridad, callback) {
  if(database) {
    var sql = "DELETE FROM Prioridad WHERE idPrioridad = ?";
    database.query(sql, idPrioridad,
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, {"Mensaje": "Eliminado"});
      }
    });//Fin query
  }//Fin IF
}//FIN SelectAll


module.exports = Prioridad;
