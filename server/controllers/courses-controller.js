const Course = require("../model/Course");
const fs = require("fs");



const getAllCourses = async(req,res,next)=>{
    let courses;
    try {
        courses = await Course.find()

        // console.log(courses);
      
    } catch(err){
        console.log(err);
     }
 
     if(!courses){
         return res.status(404).json({message:"No courses found"})
     }
     return res.status(200).json({courses});

}

const getById = async(req,res,next)=>{
    const id = req.params.id;
    let course;
    try{
        course = await Course.findById(id);
    }catch(err){
        console.log(err);
        
    }
    if(!course){
        return res.status(404).json({message:"No course found"});
    }
    return res.status(200).json({course});
}

const addCourse = async(req,res)=>{
     //get data from req means frontend
    const {name, author, description, courselink, price}= req.fields;
    const {thumbnail} = req.files;
    if(!name || !auther || !description || !courselink || !price){
        return res.status(500).send({
            error:"all field is required"
        })
    }
    if(!thumbnail && thumbnail.size >1000000){
        return res.status(500).send({
            error: 'photo is required and size should be less than 1mb'
        })
    }
    let course;
    //make object to push in database
    console.log("body",req.body);
    try{
        course= new Course({
            name,
            author,
            description,
            thumbnail,
            courselink,
            price
        });
        console.log("here is course",course);
        await course.save();
    } catch(error){
        console.log(err);
        res.status(500).send({
            success: false,
            error,
            message: "error is creating course"
        })
       

    }

    if(!course){
        return res.status(500).json({message:"unable to add"});
    }
    return res.status(201).json({course});
    
};
        
const updateCourse = async(req,res,next)=>{
    const id = req.params.id;
    const {name,author,description,price,image}=req.body;
    let course;
    try{
        course = await Course.findByIdAndUpdate(id,{
            name,
            author,
            description,
            price,
            image
        });
        course = await course.save()
    }catch(err){
        console.log(err);
    }
    if(!course){
        return res.status(404).json({message:"No course found"});
    }
    return res.status(200).json({
        success: true,
        data: course,
        message: "successfully updated"
    });
}

const deleteCourse= async(req,res)=>{
    const {id}= req.params;
    try{
      const course = await Course.findByIdAndDelete(id);
    
      if(!course){
        return res.status(400).json("course not found");
      }
      res.status(200).json({
        success: true,
        err: {},
        message: "successfully deleted course"
      })
    } catch(err){
      console.log(err);
      return err;
    }
  }

  const searchProduct = async (req,res)=>{
      try{
        const {keyword} = req.params;
        const result = await Course.find({
            $or: [
                {name:{$regex :keyword, $options: "i"}},
                {description: {$regex :keyword, $option:"i"}}
            ]
        }).select("-photo");
        res.json(results);
      } catch(err){
          console.log(err);
          res.status(400).send({
              success: false,
              message: "error in search product",
              err,
          })
      }
  };



exports.getAllCourses = getAllCourses;
exports.addCourse = addCourse;
exports.getById = getById;
exports.updateCourse = updateCourse;
exports.deleteCourse = deleteCourse;
exports.searchProduct = searchProduct;