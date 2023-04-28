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
//   courses: [{ type: mongoose.Types.ObjectId, ref: "Course", required: true }],
},
{timestamps:true}
);



module.exports = mongoose.model("User",userSchema);