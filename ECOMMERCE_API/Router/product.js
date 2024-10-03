
const Product = require("../models/Product");
const { verifyToken, verifyAuthorizaiton, verifyAdmin } = require("./verifyToken");

const router = require("express").Router();

//CREATE
router.post("/",verifyAdmin, async (req,res)=>{
    const newProduct = new Product(req.body)
    try {
      const savedProduct = await newProduct.save()
      res.status(200).json(savedProduct)  
    } catch (err) {
        res.status(500).json(err)
    }
})

//UPDATE
router.put("/:id", verifyAdmin, async (req,res)=>{
try {
    const updateProduct = await Product.findByIdAndUpdate(req.user.id,{$set: req.body}, {new:true});
    res.status(200).json(updateProduct);

} catch (err) {
    res.status(500).json(err);
}

})

//DELETE
router.delete("/", verifyAdmin, async (req,res)=>{
    try {
       await Product.findByIdAndDelete(req.params.id);
       res.status(200).json("Product has been deleted successfully......") 
    } catch (err) {
        res.status(500).json(err)
        
    }
})

//GET PRODUCT
router.get("/find/:id", async (req,res)=>{
    try {
       const findProduct= await Product.findById(req.params.id);
       res.status(200).json(findProduct) 
    } catch (err) {
        res.status(500).json(err)
        
    }
})


//GET ALL PRODUCTS
router.get("/", async (req,res)=>{
    const queryNew= req.query.new;
    const queryCategory = req.query.category;
    let findProd;
    try {
      
      if(queryNew){
        findProd = await Product.find().sort({createdAt:-1}).limit(5);
      }else if(queryCategory){
        findProd = await Product.find({
          categories:{
            $in: [queryCategory]
          }
        })
      }
      else{
        findProd = await Product.find();
      }

       
       res.status(200).json(findProd) 
    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router;