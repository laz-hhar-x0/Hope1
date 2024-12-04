
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
const hope = require("./models/articleSchema");

// app.use(express.static('public'))
app.use(express.static('public'));
app.use(express.json());
app.set('view engine', 'ejs');




app.get('/',(req,res)=>{
    res.render('hope', { } );
})




app.post("/", (req, res) => {
  const Hope = new hope(req.body);
  
  Hope
  .save()
  .then( result => {
                res.redirect("/");
              })
              .catch( err => {
                console.log(err);
              });
          });






          mongoose.connect("mongodb://lazhhar0001:Lazhar123@cluster2-shard-00-00.tkaoj.mongodb.net:27017,cluster2-shard-00-01.tkaoj.mongodb.net:27017,cluster2-shard-00-02.tkaoj.mongodb.net:27017/?ssl=true&replicaSet=atlas-tik33t-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster2")
            .then(() => {
                  app.listen(port , () => {
                      console.log(`http://localhost:${port}/`)
                  });
                  })
             .catch((err) => {
                   console.log(err);
                  });
          
          
        // app.listen(port , () => {
        //       console.log(`http://localhost:${port}/`)
        //   }) ;