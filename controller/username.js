const userName=require("../model/name");

exports.postUser=async(req,res)=>{
      try{
          const data = new userName({
            username:req.body.username
          });
          const result= await data.save();
          res.status(200).json({
            message:"name added successfully",
            Result:result
          })
      }
      catch(error){
        res.status(400).json({
            message:error || "error" })
      }
};

exports.getUsers=async(req,res)=>{
    try{
        const result = await userName.find();
        res.status(200).json({
            message:"name getted successfully",
            Result:result
          })
    }
    catch(error){
        res.status(400).json({
            message:error || "error" })
      }
};
exports.getUserById=async(req,res)=>{
    try{
        const result = await userName.findById(req.params.id);
        res.status(200).json({
            message:"name getted successfully",
            Result:result
          })
    }
    catch(error){
        res.status(400).json({
            message:error || "error" })
      }
};

exports.upadteUserById=async(req,res)=>{
    try{
        const result = await userName.findByIdAndUpdate(req.params.id,req.body,{useFindAndModify:false});
        res.status(200).json({
            message:"name updated successfully",
            Result:result
          })
    }
    catch(error){
        res.status(400).json({
            message:error || "error" })
      }
};
exports.deleteUserById=async(req,res)=>{
    try{
        const result = await userName.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message:"name deleted successfully",
          })
    }
    catch(error){
        res.status(400).json({
            message:error || "error" })
      }
};