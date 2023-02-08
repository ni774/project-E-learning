const mongoose =require('mongoose');
const jwt= require('jsonwebtoken');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  tokens:[
    {
      token:{
        type: String,
        required: true,
      }
    }
  ]
//   courses: [{ type: mongoose.Types.ObjectId, ref: "Course", required: true }],
});



module.exports = mongoose.model("User",userSchema);