const router = require("express").Router();
const pool = require("../db");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");

module.exports = router;

//Registering
router.post("/register", async (req,res) => {
    try{
        //1. Destructure the req.body (name, email, password)
        const {name, email, password} = req.body;
        //2. Verify if the user exists( If exist, throw error, this is a registration not a login)
        //Significa que o usuario já existe
        const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
            email
          ]);
      
          if (user.rows.length > 0) {
            return res.status(401).send("User already exist!");
          }
        
        //3. Bcrypt the user password -> encrypting
        //Isto nos informara quão encriptado será BCRYPT SALTROUND
        const salt = await bcrypt.genSalt(10);

        //Iniciando a encriptação
        const bcryptPassword = await bcrypt.hash(password, salt);
        //4. Enter the new user inside our database
        let newUser = await pool.query("INSERT INTO users(user_name, user_email, user_password) VALUES ($1,$2,$3) RETURNING *", 
            [name, email, bcryptPassword]);
        
        //res.json(newUser.rows[0]);
        //5. Generate our JWT Token

        const jwtToken = jwtGenerator(newUser.rows[0].user_id);

        res.send({ jwtToken });

    }catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
      }
});