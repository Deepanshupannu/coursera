const { Router } = require("express");

const adminRouter=Router()
const { adminModel } = require("../db");

adminRouter.post("/signup",function(req,res){
    res.json({
        message:"Signup endpoint for admin"
    })
})
adminRouter.post("/signin",function(req,res){
    res.json({
        message:"Signin endpoint for admin"
    })
})
adminRouter.post("/course",function(req,res){
    res.json({
        message:"course post endpoint for admin"
    })
})
adminRouter.put("/course",function(req,res){
    res.json({
        message:"course put endpoint for admin"
    })
})
adminRouter.get("/course/bulk",function(req,res){
    res.json({
        message:"course bulk endpoint for admin"
    })
})
module.exports={
    adminRouter:adminRouter
}