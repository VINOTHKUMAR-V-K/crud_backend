const mongoose=require("mongoose");

const userNameSchema= mongoose.Schema({
     username:{
        type:String,
        required:true
     }
});
module.exports=mongoose.model("UserName",userNameSchema);
