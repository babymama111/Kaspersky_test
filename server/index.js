const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const fs = require("fs");
const app = express();
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));

// тут хотел осуществить подключение к бд, чтобы я не хранил данные в json, как они хранятся сейчас))),
// а написал модели, валидацию данных, отправленных с фронтенд и осуществил метод пост, чтобы можно было добавлять пользователя, но не успел(((

// // коннект к бд
// mongoose.connect('mongodb+srv://admin:1898@atlascluster.uqze4xe.mongodb.net/blog?retryWrites=true&w=majority')
// .then(()=>{
//     console.log("db ok")})
// .catch((err)=>{
//     console.log("db err", err);
// });

app.get("/list", (req, res) => {
  try {
    fs.readFile("./data.json", "utf8", (err, data) => {
      if (err) throw err;

      const jsonData = JSON.parse(data);
      res.send(jsonData);
    });
  } catch (error) {
    console.error(error);
  }
});

// Также хотел сделать отправку данных с бэкенда по частям, но что-то пошло не так(

//   res.send(data);
// });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
