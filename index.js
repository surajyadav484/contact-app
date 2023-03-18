const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const routes = require("./components");
const handleError = require("./middleware/errorHandler");
const userController = require("./components/users/controller/users");
const cookieParser = require("cookie-parser");
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

// const userController = require("./components/users/controller/users")
app.post("/login", userController.login);
app.use("/", routes);
app.use(handleError);

const PORT = 4000;
app.listen(PORT || 4000, () => console.log(`app started listening at ${PORT}`));
