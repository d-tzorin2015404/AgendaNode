var database = require('./database');
var Usuario = {};

Usuario.selectAll = function(callback) {
  if(database) {
    database.query("SELECT * FROM Usuario",
    function(error, resultados) {
      if(error) {
        throw error;
      } else {
        callback(null, resultados);
      }
    });
  }
}

Usuario.select = function(idUsuario, callback) {
  if(database) {
    var sql = "SELECT * FROM Usuario WHERE idUsuario = ?";
    database.query(sql, idUsuario,
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, resultado);
      }
    });
  }
}

Usuario.autenticar = function(data, callback) {
  if(database) {
    var sql = "SELECT * FROM Usuario WHERE nick = ? AND contrasena = ?";
    database.query(sql, [data.nick, data.contrasena],
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, resultado);
      }
   });
  }
}

Usuario.insert = function(data, callback) {
  if(database) {
    database.query("INSERT INTO Usuario SET ? ", data,
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, {"insertId": resultado.insertId});
      }
   });
  }
}

Usuario.update = function(data, callback) {
  if(database) {
    var sql = "UPDATE Usuario SET "
    +"nick = ?, contrasena = ? WHERE idUsuario = ?";
    database.query(sql,
    [data.nick, data.contrasena, data.idUsuario],
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, {"insertId": resultado.insertId});
      }
    });
  }
}

Usuario.delete = function(idUsuario, callback) {
  if(database) {
    var sql = "DELETE FROM Usuario WHERE idUsuario = ?";
    database.query(sql, idUsuario,
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, {"Mensaje": "Eliminado"});
      }
    });
  }
}

module.exports = Usuario;
