const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({ extended: true }));

// Set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));
let post = {
    username :"john",
    content: "hello world",

}
{
    usename : "sachin"
    content :  'hii'
}



app.get("/posts", (req, res) => {
    res.render("index.ejs",{post});
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
