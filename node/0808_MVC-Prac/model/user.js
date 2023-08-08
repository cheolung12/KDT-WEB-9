const mysql = require('mysql');

const conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "mysql_prac",
  password: "12345678",
  database: "kdt9",
});

conn.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connect");
  }
});

exports.postSignUp = (data, cb) => {
    const query = `insert into user (userid, name, pw) values ('${data.userid}','${data.name}', '${data.pw}')`;
    conn.query(query, (err, data) => {
        cb();
    })
}

exports.postSignIn = (data, cb) => {
    const query = `select * from user where userid='${data.userid}' and pw='${data.pw}'`;
    conn.query(query, (err, rows) => {
        console.log(rows);
        cb(rows);
    })
}

exports.profile = (id, cb) => {
  const query = `select * from user where id=${id}`;
  conn.query = (query, (err, rows) => {
    console.log(rows);
    cb(rows);
  })
}

exports.edit = (data, cb) => {
  const query = `update user set name='${data.name}', userid='${data.userid}', pw='${data.pw}' where id=${data.id}`;
  conn.query(query, (err, rows) => {
    console.log("rows", rows);
    if (err) {
      return;
    }
    cb();
  });
}

exports.delete = (data, cb) => {
  const query = `delete from user where id=${data.id}`;
  conn.query(query, (err, rows) => {
    cb();
  });
}




