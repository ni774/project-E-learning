
const mongoose = require('mongoose');
const db = process.env.ATLAS_URI;
mongoose.connect(db,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
  console.log("connection successfull from databse");
}).catch((e)=>{
     console.log(e);
})