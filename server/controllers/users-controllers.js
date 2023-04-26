
const User = require("../model/user");
const jwt= require('jsonwebtoken');
// const cookieParser =require('cookie-parser');
const bcrypt = require('bcryptjs');

const getAllUser = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
  }
  if (!users) {
    return res.status(404).json({ message: "No Users Found" });
  }
  return res.status(200).json({
    success: true,
    data: users,
    err: {},
    message: "all users fetched"
 });
};

   //Registering user
const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  let existingUser;
  //first find that if user already exist
  console.log("here")
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);

  }
  console.log("kjdk")
  if (existingUser) {
    return res.status(400).json({message: "User Already Exists! Login Instead"})
  }
  
  const hashedPassword = await bcrypt.hashSync(password);
  
    
  //make object to push user in database first
  const user = new User ({
    name,
    email,
    password: hashedPassword
  });
  console.log(user);
  try {
    user.save();
    console.log(user);
  } catch (err) {
    return console.log(err);
  }
  return res.status(201).json({
    success: true,
    data: user,
    message: "successfully created new user"
  })
};
     
   //for login first retrieve info from db and match with frontend data if matched then login
  
const login = async (req, res) => {
  const { email, password } = req.body;
 
  let existingUser;
  try {
    // console.log("email is finding");
    existingUser = await User.findOne({ email });
    console.log("mujhe mila",existingUser);
  } catch (err) {
    console.log(err);
    return res.status(404).josn({
      message: "email coud not found"
    })
  }
  if (!existingUser) {
    return res
    .status(404)
    .json({ message: "Could not find user by this email"})
  }
  const isPasswordCorrect = await bcrypt.compareSync(password,existingUser.password);
  
  if (!isPasswordCorrect) {
    return res.status(404).json({message: "Incorrect email or Password"})
  }
  else{
      try{
        const token=await generateToken(existingUser);
        // console.log("-----> res--",res);
        // res.cookie("jwt",token,{
        //   expires : new Date(Date.now()+60000), //24 hours
        //   httpOnly : true
        // })
         
        // console.log("cookies id-->",req.cookies.jwt);
        return res.status(200).json({
          success:true,
          data: token,
          err:{},
          message: "Login Successful",
          // user: existingUser
        });
      } catch(err){
        console.log(err);
      }

  }
 
}

//delete user
const deleteUser= async(req,res)=>{
  const {id}= req.params;
  try{
    const user = await User.findByIdAndDelete(id);
    // console.log(response);
    if(!user){
      return res.status(400).json("user not found");
    }
    res.status(200).json({
      success: true,
      err: {},
      message: "successfully deleted user"
    })
  } catch(err){
    console.log(err);
    return err;
  }
}



//generate token to verify user
const generateToken=async function(user){
  try{
      let Token = jwt.sign({user},process.env.SECRET_KEY,{expiresIn:"24h"});
      // user.token=user.tokens.concat({token:Token});
      user.token=Token;
      // await user.save();
      return Token;
  }catch(err){
      console.log(err);
  }

}

const getById = async(req,res,next)=>{
  const id = req.params.id;
  let user;
  try{
      user = await User.findById(id);
  }catch(err){
      console.log(err);
      
  }
  if(!user){
      return res.status(404).json({message:"No user found"});
  }
  return res.status(200).json({user});
}




exports.signup = signup;
exports.login = login;
exports.getAllUser=getAllUser;
exports.deleteUser = deleteUser;
exports.getById = getById;

