const { Pool } = require("pg");

const router = require("express").Router();
const pool = require("../db");
const authorization = require("../middleware/authorization");

router.get("/",authorization, async (req, res) => {
    try {
        
        // The req.user has the payload
        //res.json(req.user);
        const user = await pool.query("SELECT user_name FROM users WHERE user_id = $1", [req.user]); // se quiser o payload, basta colocar *
        res.json(user.rows[0]);
    } catch (error) {
        console.error(err.message);
        res.status(500).json("Server Error");
    }
});

module.exports = router;