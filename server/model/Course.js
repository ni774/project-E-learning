const mongoose =require('mongoose');

const Schema = mongoose.Schema;

const courseSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    thumbnail:{
        type: String,
    },
    price:{
        type:Number,
        required:true
    },
   
});

module.exports = mongoose.model("Course",courseSchema);