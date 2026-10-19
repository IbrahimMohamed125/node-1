const express = require('express');
const app = express();
const port = 30001;
const mongoose = require('mongoose');
app.use(express.urlencoded({ extended: true }));
const Mydata = require("./models/mydataSchema")
app.set('view engine', 'ejs')
app.use(express.static('public'))

//Auto Refresh

const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));

const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});


app.get('/', (req, res) => {
  Mydata.find()
    .then((result) => {
      res.render("home", { mytitle: "Home Page", arr : result  })
 })
    .catch((err) => { console.log(err) })


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
  .catch((err) => { console.log(err) });




app.post('/', (req, res) => {
  console.log(req.body)

  const mydata = new Mydata(req.body)
  mydata.save().then(() => {
    res.redirect("/index.html")

  }).catch((err) => {
    console.log(err)
  })
});