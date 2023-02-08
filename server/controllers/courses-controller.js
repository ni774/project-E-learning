const Course = require("../model/Course");



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
//     recordRoutes.route("/record").get(function (req, res) {
//         let db_connect = dbo.getDb("employees");
//         db_connect
//           .collection("records")
//           .find({})
//           .toArray(function (err, result) {
//             if (err) throw err;
//             res.json(result);
//           });
//        });
 }

// const getById = async(req,res,next)=>{
//     const id = req.params.id;
//     let course;
//     try{
//         course = await Course.findById(id);
//     }catch(err){
//         console.log(err);
        
//     }
//     if(!course){
//         return res.status(404).json({message:"No course found"});
//     }
//     return res.status(200).json({course});
// }

const addCourse = async(req,res,next)=>{
     //get data from req means frontend
    const{name,author,description,thumbnail,price}=req.body;
    let course;
    //make object to push in database
    try{
        course= new Course({
            name,
            author,
            description,
            thumbnail,
            price
        });
        console.log(course);
        await course.save();
    } catch(err){
        console.log(err);
    }

    if(!course){
        return res.status(500).json({message:"unable to add"});
    }
    return res.status(201).json({course});
    
};
        //we will use this later--->
// const updateCourse = async(req,res,next)=>{
//     const id = req.params.id;
//     const {name,author,description,price,image}=req.body;
//     let course;
//     try{
//         course = await Course.findByIdAndUpdate(id,{
//             name,
//             author,
//             description,
//             price,
//             image
//         });
//         course = await course.save()
//     }catch(err){
//         console.log(err);
//     }
//     if(!course){
//         return res.status(404).json({message:"No course found"});
//     }
//     return res.status(200).json({course});
// }




exports.getAllCourses = getAllCourses;
exports.addCourse = addCourse;
// exports.getById = getById;
// exports.updateCourse=updateCourse;