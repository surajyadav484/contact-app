const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const routes = require("./components");


app.use(bodyParser.json());
app.use(cors());

app.use("/", routes);

const PORT = 4000;
app.listen(PORT || 4000,()=> console.log(`app started listening at ${PORT}`));