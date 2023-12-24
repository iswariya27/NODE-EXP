const express = require("express");
const app = express();
app.use(express.json());


const dt = Date.now();
const date_obj = new Date(dt);
const date = date_obj.getDate();
const month = date_obj.getMonth() + 1;
const year = date_obj.getFullYear();
const time = date_obj.getTime();
const fileName = date + "-" + month + "-" + year + "-" + time;


const timestamp = new Date().toISOString();


const fs = require("fs");
fs.writeFile(`${fileName}.txt`, timestamp, function (err) {
  console.log("A New File Created");
});

let files = [];
fs.readdir("./", function (req, res) {
  files.push(res);
});

app.get("/", (req, res) => {
  res.json({ Files: { files } });
});


app.listen(7000);
