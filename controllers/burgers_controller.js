var express = require("express");
var router = express.Router();

var db = require("../models");

// GET route for getting all of the burgers
  //CRUD: Read
  router.get("/", function(req, res) {
    // Add sequelize code to find all burgers, and render them to the user.
    db.Burger.findAll({
    }).then(function(dbBurgers){
      var hbsObject = {
        burgers: dbBurgers
      };
      res.render("index", hbsObject);
    });
});


 // POST route for saving a new burger
  router.post("/", function(req, res) {
    // Add sequelize code for creating a new burger using req.body,
    // then redirecting to the index. 
    db.Burger.create({
      burger_name: req.body.name,
    }).then(function(dbBurger){
      res.redirect("/");
    });
  });


// PUT route for updating burger
  router.put("/:id", function(req, res) {
    
    db.Burger.update({
      devoured: req.body.devoured
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbBurger){
      res.redirect("/");
    });
  });

//exporting to server.js
module.exports = router;

