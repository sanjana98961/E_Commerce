const jwt = require("jsonwebtoken")
const verifyToken = (req,res, next)=>{
    const authHeader = req.headers.token;
    if(authHeader){
        const token = authHeader.split(" ")[1];
    
    jwt.verify(token, "sanjana;", (err,user)=>{
        if(err) res.status(403).json("Token is not valid!!");
        req.user = user;
        next();
    });

    } else{
        return res.status(401).json("You are not authenticated!!")
    }
 }

const verifyAuthorizaiton = (req,res,next)=>{
    verifyToken(req,res, ()=>{
        if(req?.user && req?.user?.id=== req?.params?.id || req?.body?.user?.isAdmin){
            next()
        } else{
            res.json("You are not allowed to make changes!!")
        }
    })
}

const verifyAdmin = (req,res,next)=>{
    verifyToken(req,res, ()=>{
        if(req?.user?.isAdmin){
            next();
        } else{
            res.json("You are not allowed to make changes!!")
        }
    })
}
 
 module.exports = {verifyToken,verifyAuthorizaiton, verifyAdmin};