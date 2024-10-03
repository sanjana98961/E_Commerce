const User = require("../models/User");
const CryptoJS = require("crypto-js")
const { verifyToken, verifyAuthorizaiton, verifyAdmin } = require("./verifyToken");

const router = require("express").Router();

//UPDATE
router.put("/:id", verifyAuthorizaiton, async (req,res)=>{
if(req.body.password){
    req.body.password= CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET).toString()
}
try {
    const updateUser = await User.findByIdAndUpdate(req.user.id, {$set: req.body},{new: true});
    res.status(200).json(updateUser);

} catch (err) {
    res.status(500).json(err);
}

})

//DELETE
router.delete("/:id", verifyAuthorizaiton, async (req,res)=>{
    try {
       await User.findByIdAndDelete(req.user.id);
       res.status(200).json("User has been deleted successfully......") 
    } catch (err) {
        res.status(500).json(err)
        
    }
})

//GET USER
router.get("/find/:id", verifyAdmin, async (req,res)=>{
    try {
       const findUser= await User.findById(req.user.id);
       const {password, ...others} = findUser._doc;
       res.status(200).json(others) 
    } catch (err) {
        res.status(500).json(err)
        
    }
})


//GET ALL USERS
router.get("/", verifyAdmin, async (req,res)=>{
    const query= req.query.new
    try {
       const findUser= query? await User.find().sort({_id:-1}).limit(5) : await User.find();
       res.status(200).json(findUser) 
    } catch (err) {
        res.status(500).json(err)
    }
})

//GET USER STATS - YEARLY USER
router.get("/stats", verifyAdmin, async (req,res)=>{
    const date = new Date();
    const lastYear= new Date(date.setFullYear(date.getFullYear()-1))
    try {
    const data= await User.aggregate([
      { $match: {createdAt: {$gte:lastYear}} },
      {$project:{month: {$month: "$createdAt"}}},
      {$group: {_id:"$month", total: {$sum:1}}}
    ])  

    res.status(200).json(data)

    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;