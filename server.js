const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const cors = require("cors");
const path = require("path");

// Imports of Routes
const index = require("./Routes/index");
const users = require("./Routes/user");
const accountUsers = require("./Routes/accountUsers");
const printers = require("./Routes/printer");

// Imports of Middlewares
const test = require("./middlewares/test");

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("tiny"));

// parse application/json
app.use(express.json());
app.use(express.urlencoded({
    extended: false,
}));
app.use(cors());

app.use('/static', express.static('static'))

// Using of middlewares
app.use("/", test);

// Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "Client", "public", "index.html"))
})

app.use("/api/users", users);
app.use("/api/accountUsers", accountUsers);
app.use("/api/printers", printers);


app.listen(port, "localhost", (err) => {
    if(err) {
        console.log("Server cannot listen"); return 
    }
    console.log(`Server is running on port ${port}`);
});