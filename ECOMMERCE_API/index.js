const express = require("express")
const mongoose = require("mongoose")
const dotenv= require("dotenv")
const authRoute= require("./Router/auth")
const userRoute = require("./Router/user")
const productRoute= require("./Router/product")
const cartRoute= require("./Router/cart")
const orderRoute= require("./Router/order")
const cors = require('cors');

dotenv.config();

mongoose.connect(process.env.Mongo_url)
.then(()=>{
    console.log("Connect Successfully")})
.catch((err)=>{
    console.log(err)
})

const app= express();

app.use(cors());
app.use(express.json());
app.use("/api/auth/", authRoute);
app.use("/api/users/", userRoute);
app.use("/api/products/",productRoute);
app.use("/api/carts/", cartRoute);
app.use("/api/orders/", orderRoute)


app.listen(process.env.Port || 2000, ()=>{
    console.log("running express")
})