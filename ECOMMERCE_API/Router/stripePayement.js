const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET)

router.post("/payment", (req,res)=>{
    stripe.charges.create(
        {
            source: req.body.tokenId,
            amonut: req.body.amonut,
            currency: "inr", 
        },
        (error, response) => {
            if(error){
                res.status(500).json(error)
            } else{
                res.status(200).json(response)
            }
        }
    )
})