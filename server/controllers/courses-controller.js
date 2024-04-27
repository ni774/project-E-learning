const Course = require("../model/Course");
const fs = require("fs");
const { log } = require("console");
const path = require("path");



const getAllCourses = async(req,res)=>{
    console.log("getall course")
    let courses;
    try {
        courses = await Course.find();

       
      
    } catch(err){
        console.log(err);
     }
 
     if(!courses){
         return res.status(404).json({message:"No courses found"})
     }
     return res.status(200).send({courses});

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

const getphoto = async(req, res) =>{
  const id = req.params.id;
  let course;
  try{
   course = await Course.findById(id).select("thumbnailLink");
  //  console.log("yes",course,"yes2", course.thumbnailLink);
  const photopath = course.thumbnailLink;
   if(fs.existsSync(photopath)){
    res.sendFile(path.resolve(photopath))
   } else{
    return res.status(404).json({message:"No photo found"});
   }

  }catch(err){
    console.log(err);
  }
}

const addCourse = async(req,res)=>{
     //get data from req means frontend
     try {
    
          const { name, creator, description, courselink, price } = req.body;
          console.log("data",name,creator,description);
          const thumbnail = req.file; // Access the file information from multer
        
          if (!name || !creator || !description || !courselink || !price) {
            return res.status(400).json({
              success: false,
              error: 'All fields are required',
            });
          }
    
          if (!thumbnail || thumbnail.size > 1000000) {
            return res.status(400).json({
              success: false,
              error: 'Thumbnail is required and size should be less than 1mb',
            });
          }
    
          // Make an object to push into the database
          thumbnail.path = thumbnail.path.replace(/\\/g, '/'); // Replace backslashes with forward slashes
          const course = new Course({
            name,
            creator,
            description,
            thumbnailLink: thumbnail.path, // Save only the filename in the database
            courselink,
            price,
          });
          console.log("course: " + course);
    
          await course.save();
          if(!course){
            return res.status(500).json({message:"unable to add"});
         }
          return res.status(201).json({
            success: true,
            data: course,
            message: "successfully added"
          });
        
      } catch (error) {
        console.error('Error creating course:', error);
        console.log("error", error);
        res.status(500).json({
          success: false,
          error,
          message: 'Error creating course',
        });
      }

    
    // return res.status(201).json({course});
    
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
        const {keyword} = req.params || req.query.course;
        const results = await Course.find({
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
exports.getphoto = getphoto;
exports.updateCourse = updateCourse;
exports.deleteCourse = deleteCourse;
exports.searchProduct = searchProduct;