const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

// Routes
const user = require("./Routes/user");

app.use(morgan("tiny"));
app.use(cors());
app.use(express.urlencoded({
    extended: true,
}));

app.use("/", user);


app.listen(3000, "localhost", () => {
    console.log("server is running by port 3000");
});