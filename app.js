const express = require('express');
const app = express();
const port = 30001;
const mongoose = require('mongoose');

app.get('/', (req, res) => {
  res.sendFile("./views/home.html",{root:__dirname})
});



mongoose
.connect("mongodb+srv://ebrahimmohamedabrahymmhmd_db_user:OaxKzTHSQt0g9z9d@cluster0.bmejbho.mongodb.net/all-data?appName=Cluster0")
.then(() => {

  app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
  
});

})
.catch((err) => {console.log(err)});
