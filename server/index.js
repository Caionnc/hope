const express = require("express"); // Importando a library Express
const app = express();
const cors = require("cors");

app.use(express.json()) // Nos permite acessar o Client side code // req.body
app.use(cors());

//ROUTES

//Register and login routes

app.use("/auth", require("./routes/jwtAuth"));

//Dashboard new Route
app.use("/dashboard", require("./routes/dashboard"));

app.listen(5000,() => {
    console.log("Server is running on port 5000");
}); // Testando a porta