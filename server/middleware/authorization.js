//Authorization serve para informar se o usuario eh valido de estar logado

const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async(req,res, next) => {
    try{
        const jwtToken = req.header("token");
        console.log(jwtToken);
        
        if(!jwtToken){
            return res.status(403).json("Not an authorized user token")
        }

        //Caso o usuario possua o JWT Token de verificação, o mesmo é autorizado a continuar no DASHBOARD por exempĺo.
        const payload = jwt.verify(jwtToken, process.env.jwtSecret);

        req.user = payload.user;
        next();
    }catch(err){
        console.log(err.message);
        return res.status(403).json("Catch Error");

    }
}

