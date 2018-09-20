var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine" , "ejs");

var campgrounds = [
   {name: " Vasanthakumar", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1aTi9RLNYoTl1A1ghKyeYkCnCoKqWD5P_ithENRSBG5NkLv2x" },
   {name: " Kaleeshwaran" , image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1aTi9RLNYoTl1A1ghKyeYkCnCoKqWD5P_ithENRSBG5NkLv2x" },
   {name: " Gowtham" , image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1aTi9RLNYoTl1A1ghKyeYkCnCoKqWD5P_ithENRSBG5NkLv2x" }
];

app.get("/", function(req, res){
   res.render("landing");

});

app.get("/campgrounds", function(req, res){

     res.render("campgrounds" , {campgrounds:campgrounds});
      res.render("yelpcamp" , {campgrounds:campgrounds});

});
app.post("/campgrounds", function(req, res){
   var name = req.body.name;
   var image = req.body.image;
   var newCamground = {name: name, image: image}
   campgrounds.push(newCamground);
   res.redirect("/campgrounds");
});

app.get("/campgrounds/new" , function(req, res){
  res.render("new.ejs");
});


app.listen(process.env.port || 7000,function(){
    console.log("The Yelp Camp Server Has Started!");

});
