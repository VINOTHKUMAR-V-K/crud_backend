const express=require("express");
const app= express();
const route=require("./router/router");
const cors= require("cors");
app.use(express.json());
app.use(cors());
const port= 5000;
const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://vinoth:vinoth12345@cluster0.9yg5ymb.mongodb.net/",{useNewUrlParser:true});
mongoose.connection.on("error",()=>{
     console.log("conncetion failed");
});
mongoose.connection.on("open",()=>{
    console.log("connceted successfully");
})

app.use("/",route);

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})