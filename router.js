var express = require("express");
const { render } = require("express/lib/response");
var router = express.Router();

const users = require("./users.json");

router.get("/login", (req, res) => {
res.status(200).json(users)
});


router.post("/login", (req, res) => {
    const user = users.find((item) => item.username === req.body.username && item.password === req.body.password);
  
    if (user) {
    //   req.session.user = req.body.email;
      res.redirect("/home");
    } else {
      res.end("Invalid Email or Password");
    }
  });

  router.post("/register", (req, res) => {
    const { username,
        password,
        email,
        mobile,
        gender } = req.body;

  const id = users[users.length - 1].id + 1;
  const post = {
    id,
    username,
    password,
    email,
    mobile,
    gender
  };
  users.push(post);
  
  res.render("login");
});

router.get("/logout", (req, res) => {
    req.session.destroy(function (err) {
      if (err) {
        console.log(err);
        res.send("Error");
      } else {
        res.render("login");
      }
    });
  });



  module.exports = router;