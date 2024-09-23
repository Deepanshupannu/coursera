const { Router } = require("express")

const courseRouter=Router()


courseRouter.get("/buy",function(req,res){
    res.json({
        message:"course buy endpoint"
    })
})
courseRouter.get("/preview",function(req,res){
    res.json({
        message:"courses endpoint"
    })
})

module.exports={
    courseRouter:courseRouter
}
