const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
var fileupload = require("express-fileupload");

const app = express();
require("dotenv").config();

//settings(Cconfiguraciones)
app.set("port", process.env.PORT || 4500);
app.set("json spaces", 2);

//middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(fileupload());

app.use(cors());

//routes(Las rutas que utilizara WS API Rest)
app.use(require("./routes/index"));

//Inicia el servidor
app.listen(app.get("port"), () => {
	console.log("Server inicio en el puerto: ", app.get("port"));
});
