const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

app.get("/green",(req,res) => {
    res.send({
      "lightstate" : 1
    });
});
app.get("/yellow",(req,res) => {
    res.send({
      "lightstate" : 2
    });
});
app.get("/red",(req,res) => {
    res.send({
      "lightstate" : 3
    });
});
app.get("/off",(req,res) => {
    res.send({
      "lightstate" : 4
    });
});

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})