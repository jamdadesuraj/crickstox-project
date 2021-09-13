const express = require('express');
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 3000;
const app = express();

const static_path = path.join(__dirname,"../public")
const temp_path = path.join(__dirname,"../templates/views")
const partials_path = path.join(__dirname,"../templates/partials")

app.set("view engine","hbs")
app.set("views",temp_path)
app.use(express.static(static_path))
hbs.registerPartials(partials_path)

app.get("/",(req,res)=>{
    res.render("index")
})

app.listen(port,(req,res)=>{
    console.log("thisa is index page")
})