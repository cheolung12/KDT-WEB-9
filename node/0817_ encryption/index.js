const express = require('express');
const app = express();
const PORT = 8000;
require('dotenv').config();  // dotenv모듈에 있는 파일을 실행 가능하게 함

let hash = '';

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  console.log(process.env.NAME);
  console.log(process.env.NODE_ENV);
  res.render('index');
});

app.post('/hash', (req, res) => {
  const { pw } = req.body;
  // const hash = createHashedPassword(pw);
  hash = createPbkdf(pw);
  res.json({ hash });
});

app.post('/verify', (req, res) => {
  const { pw } = req.body;
  const compare = verifyPassword(pw, salt, hash);
  res.json({ compare });
});

app.post('/cipher', (req, res) => {
  const { data } = req.body;
  const encrypt = cipherEncrypt(data);
  console.log(`encrypt: ${encrypt}`);
  const decrypt = decipher(encrypt);
  res.json({ decrypt });
});

app.post('/dhash', (req, res) => {
  const { pw } = req.body;
  hash = bcryptPassword(pw);
  res.json({ hash });
});

app.post('/dverify', (req, res) => {
  const { pw } = req.body;
  const compare = comparePassword(pw, hash);
  res.json({ compare });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// 보통 listen 아래 부분에 함수 선언함

/////////// 암호화  ///////////
// 단방향
const crypto = require('crypto');

// 해시 함수 (동기)
const createHashedPassword = (password) => {
  // createHash(알고리즘.update(암호화할 값).digest(인코딩 방식))
  return crypto.createHash('sha512').update(password).digest('base64');
};

// pbkdf2함수 -> 비밀번호 기반 키 도출
const salt = crypto.randomBytes(16).toString('base64');
const iter = 100;
const keylen = 64; // 생성 할 키의 길이
const algo = 'sha512';

const createPbkdf = (password) => {
  // pbkdf2함수(비밀번호, 솙트, 반복횟수, 키의 길이, 알고리즘)
  // 반환되는 값은 버퍼값
  // 비동기는 콜백함수가 인자로 들어감
  const hash = crypto.pbkdf2Sync(password, salt, iter, keylen, algo);
  return hash.toString('base64');
};

// 암호 비교 (검증)
// 여기서 salt는 db에 있는 salt 값
const verifyPassword = (password, salt, dbPassword) => {
  const compare = crypto
    .pbkdf2Sync(password, salt, iter, keylen, algo)
    .toString('base64');
  if (compare === dbPassword) {
    return true;
  }
  return false;
};

//   const compare = crypto.pbkdf2Sync(pw, salt, leng, key_length, algo)
//   // timingSafeEqual: 두 개의 버퍼를 상수시간으로 비교하는 함수 (해킹방지 -> 동시간대에 비교)
//   const result = crypto.timingSafeEqual(compare, Buffer.from(pass, 'base64'));
//   res.send({ compare, result, });

// 양방향
const algorithm = 'aes-256-cbc'; // 256비트 키를 사용, 블록 크기는 128비트
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16); // 초기화 벡터값, 데이터블록을 암호화할 때 보안성을 높이기 위해 사용

// 암호화
// 비밀번호보다는 문서나 통신 쪽이에서 사용해서 word 라고 사용
const cipherEncrypt = (word) => {
  const cipher = crypto.createCipheriv(algorithm, key, iv); // 암호화 객체 생성
  let encryptedData = cipher.update(word, 'utf-8', 'base64'); // 암호화할 데이터 처리
  console.log(encryptedData);
  encryptedData += cipher.final('base64'); // 최종결과 생성
  return encryptedData;
};

// 복호화
const decipher = (encryptedData) => {
  const decipher = crypto.createDecipheriv(algorithm, key, iv); // 복호화 객체 생성
  let decryptedData = decipher.update(encryptedData, 'base64', 'utf-8'); // 복호화할 데이터 처리
  decryptedData += decipher.final('utf-8');
  return decryptedData;
};

// bcrypt (단방향)
const bcrypt = require('bcrypt');
const saltNumber = 10;

// 암호화
const bcryptPassword = (password) => {
  return bcrypt.hashSync(password, saltNumber);
};

const comparePassword = (password, dbPassword) => {
  return bcrypt.compareSync(password, dbPassword);
};

