const User = require("../model/user");

const isAdmin=async (req,res,next)=>{
    const data = req.user.user;
    try{
      console.log("email is",data)
      const userData = await User.findOne({email: data});
      if(userData.role!==1){
          return res.status(401).json({
            success:false,
            message:'unAuthorized Access not an'
          })
      }else{
          next();
      }
    } catch(err){
      console.log(err);
      return err;
    }
    
};

module.exports = isAdmin;