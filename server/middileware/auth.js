const jwt = require('jsonwebtoken');


const verifyToken=(req,res,next)=>{
    const token = req.body.token || req.query.token ||req.headers.authorization;

    if(!token){
        return res.status(403).send("access token is required");
    }
    // console.log(token);
    try{
       
        const decode = jwt.verify(
            token, process.env.SECRET_KEY
        );
        req.user = decode;
        console.log(decode);
        next();
    }catch(err){
        console.log(err)
        return res.status(401).send("invalid token");
    }
    
};

module.exports=verifyToken;