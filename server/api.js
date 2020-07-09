const mysql = require('mysql');
const dbConfig = require('./db');
const sqlMap = require('./sqlMap');

const pool = mysql.createPool({
  host: dbConfig.mysql.host,
  user: dbConfig.mysql.user,
  password: dbConfig.mysql.password,
  database: dbConfig.mysql.database,
  port: dbConfig.mysql.port,
  multipleStatements: true    // 多语句查询
});

const mongoclient = require("mongodb").MongoClient;
const url = "mongodb://140.143.100.150:27017/runoob";
const pool2 = mongoclient.connect(url, function (err, client) {
  client.db("").admin().listDatabases().then(function (data) {
      data.databases.forEach(function (value, index, arr) {
          console.log(value.name);
      })
  }, function (err) {
      console.log(err.message);
  })
});

module.exports = {
  getValue(req, res, next) {
    var id = req.query.id;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.getValue;
      connection.query(sql, [id], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  setValue(req, res, next) {
    console.log(req.body);
    var id = req.body.id, name = req.body.name;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.setValue;
      connection.query(sql, [name, id], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  deleteValue(req, res, next) {
    var id = req.body.id;
    pool.getConnection((err, connection) => {
      var sql = sqlMap.deleteValue;
      connection.query(sql, [id], (err, result) => {
          res.json(result);
          connection.release();
      })
    })
  },
  setValueByMongodb(req, res, next) {
    console.log(req.body);
    var flag = req.body.flag, time = req.body.time, current = req.body.current;
    mongoclient.connect(url, { useNewUrlParser: true }, function(err, db) {
      if (err) throw err;
      var dbo = db.db("mrz");
      var myobj = { flag: flag,current: current, time: time };
      dbo.collection("peipei").insertOne(myobj, function(err, result) {
          if (err) throw err;
          res.json(result);
          db.close();
      });
    });
  },
}