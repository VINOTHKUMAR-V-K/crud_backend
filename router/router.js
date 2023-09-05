const express= require("express");
const router=express.Router();
const user=require("../controller/username")

router.post("/postName",user.postUser);
router.get("/getAllUsers",user.getUsers)
router.get("/getUserById/:id",user.getUserById)
router.patch("/updateUserById/:id",user.upadteUserById);
router.delete("/deleteUserById/:id",user.deleteUserById);
module.exports=router;