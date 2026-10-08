const express = require('express');
const app = express();
const port = 30001;
const mongoose = require('mongoose');
app.use(express.urlencoded({extended:true}));

const Mydata = require("./models/mydataSchema")

app.get('/', (req, res) => {
  res.sendFile("./views/home.html",{root:__dirname})
});
app.get('/index.html', (req, res) => {
  res.send("<h1> IT IS SUCCESS OPRATION </h1>")
});

mongoose
.connect("mongodb+srv://ebrahimmohamedabrahymmhmd_db_user:OaxKzTHSQt0g9z9d@cluster0.bmejbho.mongodb.net/all-data?appName=Cluster0")
.then(() => {

  app.listen(port, () => {
  console.log(`http://localhost:${port}/`);
  
});

})
.catch((err) => {console.log(err)});




app.post('/', (req, res) => {
  console.log(req.body)

 const mydata = new Mydata(req.body)
 mydata.save().then(() => { 
  res.redirect("/index.html")

  }).catch((err) => { 
    console.log(err)
   })
});