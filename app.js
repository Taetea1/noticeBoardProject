// 다운 받았던 dotenv를 적용
require("dotenv").config();
// ejs 파일과 호환되는 내용
const express = require("express");
const app = express();
const port = 3000;

// 미들웨어
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// 템플릿 엔진
app.set("view engine", "ejs");
app.set("views", "./views");

// 라우터
app.use("/", require("./routes/boardRoute"));

// 서버실행
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
