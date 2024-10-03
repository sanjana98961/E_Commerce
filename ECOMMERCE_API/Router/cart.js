
const Cart = require("../models/Cart");
const CryptoJS = require("crypto-js")
const { verifyToken, verifyAuthorizaiton, verifyAdmin } = require("./verifyToken");

const router = require("express").Router();

//CREATE
router.post("/",verifyToken, async (req,res)=>{
    const newCart = new Cart(req.body)
    try {
      const savedCart = await newCart.save()
      res.status(200).json(savedCart)  
    } catch (err) {
        res.status(500).json(err)
    }
})

//UPDATE
router.put("/:id", verifyAuthorizaiton, async (req,res)=>{
try {
    const updateCart = await Cart.findByIdAndUpdate(req.user.id,{$set: req.body}, {new:true});
    res.status(200).json(updateCart);

} catch (err) {
    res.status(500).json(err);
}

})

//DELETE
router.delete("/", verifyAuthorizaiton, async (req,res)=>{
    try {
       await Cart.findByIdAndDelete(req.params.id);
       res.status(200).json("Cart has been deleted successfully......") 
    } catch (err) {
        res.status(500).json(err)
        
    }
})

//GET USER CART
router.get("/find/:userId", verifyAuthorizaiton, async (req,res)=>{
    try {
       const findCart= await Cart.find({userId: req.params.userId});
       res.status(200).json(findCart) 
    } catch (err) {
        res.status(500).json(err)
        
    }
})
 

// //GET ALL CARTS
 router.get("/", verifyAdmin,async (req,res)=>{
    try {
      const getAllCarts= await Cart.find();
      res.status(200).json(getAllCarts)  
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router;