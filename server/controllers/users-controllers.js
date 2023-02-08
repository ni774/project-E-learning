
const User = require("../model/user");
const jwt= require('jsonwebtoken');
const cookieParser =require('cookie-parser');
// import bycrypt from "bcryptjs";

// export const getAllUser = async (req, res, next) => {
//   let users;
//   try {
//     users = await User.find();
//   } catch (err) {
//     console.log(err);
//   }
//   if (!users) {
//     return res.status(404).json({ message: "No Users Found" });
//   }
//   return res.status(200).json({ users });
// };

   //for storing user in database which got from frontend
const signup = async (req, res, next) => {
  const { name, email, password } = req.body;

  let existingUser;
  //first find that if user already exist
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err);
  }
  if (existingUser) {
    return res.status(400).json({message: "User Already Exists! Login Instead"})
  }
  
                       //   const hashedPassword = bycrypt.hashSync(password);
  //make object to push user in database first
  const user = new User ({
    name,
    email,
    password
  });

  try {
    await user.save();
    console.log(user);
  } catch (err) {
    return console.log(err);
  }
  return res.status(201).json({user})
};
     
   //for login first retrieve info from db and match with frontend data if matched then login
  
const login = async (req, res, next) => {
  const { email, password } = req.body;
  // console.log(email);
  // console.log(password);
  let existingUser;
  try {
    console.log("email is finding");
    existingUser = await User.findOne({ email });
    console.log("mujhe mila",existingUser);
  } catch (err) {
    console.log("reject")
    return console.log(err);
  }
  if (!existingUser) {
    return res
    .status(404)
    .json({ message: "Could not find user by this email"})
  }

//   const isPasswordCorrect = bycrypt.compareSync(password, exitingUser.password);
  if (password!=existingUser.password) {
    return res.status(404).json({message: "Incorrect Password"})
  }
  else{
      try{
        const token=await generateToken(existingUser);
        res.cookie("jwt",token,{
          expires : new Date(Date.now()+8640000), //24 hours
          httpOnly : true
        })
        return res.status(200).json({message: "Login Successful", user: existingUser });
      } catch(err){
        console.log(err);
      }

  }
 
}

//generate token to verify user
const generateToken=async function(user){
  try{
      let Token = jwt.sign({_id:user._id},process.env.SECRET_KEY);
      console.log(Token);
      user.tokens=user.tokens.concat({token:Token});
      await user.save();
      return Token;
  }catch(err){
      console.log(err);
  }

}

//logout

const logout= async (req,res)=>{
  try{
    await res.clearCookie('jwt',{path : '/'});
    res.status(200).send("user Logged out");
    console.log("loggedout");
    return;
  }catch(err){
    console.log(err);
  }
    

}



exports.signup = signup;
exports.login = login;
exports.logout=logout;
