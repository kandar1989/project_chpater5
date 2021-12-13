const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(express.json());
app.set('view engine', 'ejs');
const router = require("./router");
const users = require("./users.json");
const session = require("express-session");
const {v4: uuidv4} =require("uuid");

app.use( express.static( "static" ) );
app.use(session({
  secret: uuidv4(),
  resave: false,
  saveUninitialized: true,
}))
app.use(bodyParser.urlencoded({ extended: false }));
app.use ("/route", router); 
// Route to Loginpage
app.get("/", (req, res) => {
  res.render("login");
});

// Route to Homepage
app.get("/home", (req, res) => {
  res.render("index");
});

// Route to register
app.get("/register", (req, res) => {
  res.render("register");
});

// Route to portofolio
app.get("/portofolio", (req, res) => {
  res.render("portofolio");
});

// Route to ContactUs
app.get("/contact", (req, res) => {
  res.render("contact_us");
});


// Route to Login Page
// app.get("/login", (req, res) => {
//   res.sendFile(__dirname + "/static/login.html");
// });

// app.get("/home", (req, res) => {
//   res.sendFile(__dirname + "/static/homepage.html");
// });



const port = 3000; // Port we will listen on

// Function to listen on the port
app.listen(port, () => console.log(`This app is listening on port ${port}`));
