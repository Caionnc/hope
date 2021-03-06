const router = require("express").Router();
const pool = require("../db");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
const validInfo = require("../middleware/validInfo");
const authorization = require("../middleware/authorization");



//Registering
router.post("/register", validInfo, async (req,res) => {
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
        
        //5. Generate our JWT Token

        const jwtToken = jwtGenerator(newUser.rows[0].user_id);

        res.send({ jwtToken });

    }catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
      }
});


//Login Route
router.post("/login", validInfo, async (req,res) => {
    try{

        //1. Destructure the req.body
        const {email, password} = req.body;
        //2. Checar se usuário não existe(caso não, throw error)
        const user = await pool.query("SELECT * FROM users WHERE user_email = $1",
        [email]);

        if(user.rows.length === 0){
            return res.status(401).json("Password or Email is incorrect");
        }
        //3. Checar se as senhas batem
        const validPassword = await bcrypt.compare(password, user.rows[0].user_password);
        
        if(!validPassword){
            return res.status(401).json("Password or Email is incorrect");
        }

        //4. Retorne o JWT TOKEN
        const jwtToken = jwtGenerator(user.rows[0].user_id);

        res.json({ jwtToken });
    }catch(err){
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

//Is verify ROUTER
router.get("/verify", authorization ,async (req,res) => {
    try{
        res.json(true);
    }catch(err){
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;