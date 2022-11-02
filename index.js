const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

// Routes
const user = require("./Routes/user");

app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "views"));

app.use(morgan("tiny"));
app.use(cors());
app.use(express.urlencoded({
    extended: false,
}));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.render("index", { title: "Drosur"});
})

app.use("/", user);


app.listen(3000, "localhost", () => {
    console.log("server is running by port 3000");
});