const app = require('express')();


app.get("/", (req,res) => {
    res.send("Node Js Server Running")
})

app.listen(4000, function () {
    
    console.log("Node Application Running");
})


