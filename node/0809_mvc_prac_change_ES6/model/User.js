import mysql from "mysql2/promise";

// mysql 연결
// createConnection: 단일 연결
// createPool: 다중 연결
const conn = mysql.createPool({
  host: "localhost",
  user: "news",
  password: "1234",
  database: "kdt9",
  port: 3306,
});


export const post_signup = async (data) => {
  try {
    const query = "INSERT INTO user (userid, pw, name) VALUES (?, ?, ?)";
    await conn.query(query, [data.userid, data.pw, data.name]);
  } catch (error) {
    console.log(error);
  }
};
// exports.post_signup = (data, callback) => {
//     const query = `INSERT INTO user (userid, pw, name) VALUES ('${data.userid}', '${data.pw}', '${data.name}')`;
//     conn.query(query, (err, rows) => {
//         console.log('post_signup', rows);
//         callback();
//     });
// };

export const post_signin = async (data) => {
  try {
    const query = "SELECT * FROM user WHERE userid=? AND pw=?";
    const [rows] = await conn.query(query, [data.userid, data.pw]);
    return rows;
  } catch (error) {
    console.log(error);
  }
};

export const post_profile = async (data) => {
  try {
    const query = "SELECT * FROM user WHERE userid=?";
    const [rows] = await conn.query(query, [data.userid]);
    return rows;
  } catch (error) {
    console.log(error);
  }
};

export const edit_profile = async (data) => {
  const query = "update user set userid=?, pw=?, name=? where id=?";
  await conn.query(query, [data.userid, data.userpw, data.name, data.id]);
  return;
};

export const delete_profile = async (id) => {
  const query = "DELETE FROM user WHERE id=?";
  await conn.query(query, [id]);
  return;
};
