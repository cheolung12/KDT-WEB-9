const mysql = require('mysql');

// mysql 연결 하기
const conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "mysql_prac",
  password: "12345678",
  database: "kdt9",
});

// mysql 연결확인
conn.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connect");
  }
});


exports.getVisitors = (cb) => {
  const query = "select * from visitor";
  conn.query(query, (err, rows) => {
    console.log(rows);
    cb(rows);
  });
}

exports.getVisitor = (id, cb) => {
  const query = `select * from visitor where id=${id}`;
  conn.query(query, (err, rows) => {
    if (err) {
      console.log(err);
      return;
    }
    cb(rows);
  });
}

exports.createVisitor = (data, cb) => {
  const query = `insert into visitor (name, comment) values ('${data.name}','${data.comment}')`;
  conn.query(query, (err, data) => {
    console.log(data);
    cb(data);
  });
}

exports.editVisitor = (data, cb) => {
  const query = `update visitor set name='${data.name}', comment='${data.comment}' where id=${data.id}`;
  conn.query(query, (err, rows) => {
    console.log("rows", rows);
    if (err) {
      return;
    }
    cb();
  });
}

exports.deleteVisitor = (data, cb) => {
  const query = `delete from visitor where id=${data.id}`;
  conn.query(query, (err, rows) => {
    cb();
  });
}
