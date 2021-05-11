const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("work")
})
app.listen(process.env.PORT || 3000)
module.exports = app