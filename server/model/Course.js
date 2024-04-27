const mongoose =require('mongoose');

const Schema = mongoose.Schema;

const courseSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    creator:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    thumbnailLink:{
        type: String,
    },
    courselink:{
        type: String,
    },
    price:{
        type: String,
        
    },
   
},
{timestamps: true}
);

courseSchema.index({ name: 1 });
module.exports = mongoose.model("Course",courseSchema);