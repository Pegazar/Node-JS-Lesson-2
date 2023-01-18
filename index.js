const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());

const product = [
  {
    id: 1,
    name: "Apple",
    salary: 1500,
    count: 100,
  },
  {
    id: 2,
    name: "Samsung",
    salary: 1000,
    count: 45,
  },
  {
    id: 3,
    name: "Nokia",
    salary: 500,
    count: 10,
  },
  {
    id: 4,
    name: "Huawei",
    salary: 1200,
    count: 67,
  },
  {
    id: 5,
    name: "Xiaomi",
    salary: 670,
    count: 56,
  },
  {
    id: 6,
    name: "Motorola",
    salary: 100,
    count: 20,
  },
  {
    id: 7,
    name: "OnePlus",
    salary: 1000,
    count: 16,
  },
  {
    id: 8,
    name: "Google Pixel",
    salary: 800,
    count: 43,
  },
  {
    id: 9,
    name: "Asus",
    salary: 700,
    count: 30,
  },
  {
    id: 10,
    name: "Meizu",
    salary: 350,
    count: 24,
  },
];

app.get("/", (req, res) => {
  product.push(req.body);
  res.json(req.body);
});

app.get("/product", (req, res) => {
  const count = +req.query.count;
  const offset = +req.query.offset;

  if (count && offset) {
    res.send(product.slice(offset, offset + count));
    console.log(offset, count);
  } else if (count) {
    console.log(count);
    res.end();
  } else if (offset) {
    console.log(offset);
    res.end();
  } else {
    res.send(product);
  }
});

app.get("/product/:id", (req, res) => {
  res.send(JSON.stringify(product.find((item) => item.id == req.params.id)));
  console.log("Params", req.params);
});

app.listen(8080, () => {
  console.log("Server loading...");
});
