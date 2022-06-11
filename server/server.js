


const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
const router = require("./routes/course-routes");
app.use(cors());
app.use(express.json());

//middile ware--
    // app.use('/',(req,res,next)=>{
    //   res.send("this is our starting app");
    // })
  app.use(express.json());  
 app.use("/courses",router); //localhost:5000/courses


// get driver connection
const dbo = require("./db/conn");
 
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});