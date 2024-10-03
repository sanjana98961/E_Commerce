
const Order = require("../models/Order");
const CryptoJS = require("crypto-js")
const { verifyToken, verifyAuthorizaiton, verifyAdmin } = require("./verifyToken");

const router = require("express").Router();

//CREATE
router.post("/",verifyAdmin, async (req,res)=>{
    console.log(req.body)
    const newOrder = new Order(req.body)
    try {
      const savedOrder = await newOrder.save()
      res.status(200).json(savedOrder)  
    } catch (err) {
        res.status(500).json(err)
    }
})

//UPDATE
router.put("/:id", verifyAdmin, async (req,res)=>{
try {
    const updateOrder = await Order.findByIdAndUpdate(req.user.id,{$set: req.body}, {new:true});
    res.status(200).json(updateOrder);

} catch (err) {
    res.status(500).json(err);
}

})

//DELETE
router.delete("/", verifyAdmin, async (req,res)=>{
    try {
       await Order.findByIdAndDelete(req.params.id);
       res.status(200).json("Order has been deleted successfully......") 
    } catch (err) {
        res.status(500).json(err)
        
    }
})

//GET USER Orders
router.get("/find/:userId", verifyAuthorizaiton, async (req,res)=>{
    try {
       const findOrder= await Order.find({userId: req.params.userId});
       res.status(200).json(findOrder) 
    } catch (err) {
        res.status(500).json(err)
        
    }
})
 

// //GET ALL CARTS
 router.get("/", verifyAdmin,async (req,res)=>{
    try {
      const getAllOrders= await Order.find();
      res.status(200).json(getAllOrders)  
    } catch (err) {
        res.status(500).json(err)
    }
})


//Stats - GET MONTHOLY INCOME
router.get("/income", verifyAdmin, async (req,res)=>{

    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth()-1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth()));
    
    
    try {
    const income= await Order.aggregate([
      {$match: {createdAt: {$gte:previousMonth}} },
      {$project:{month: {$month: "$createdAt"}, sales: "$amount"}},
      {$group: {_id:"$month", total: {$sum:"$sales"}}}
    ])  

    console.log(income)

    res.status(200).json(income)

    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
}
)


module.exports = router;