const express=require("express")
const mongoose=require("mongoose")
const jwt=require("jsonwebtoken")

const app=express()
const JWT_secret="wjjjw"
const {courseRouter}=require("./routes/course")
const {userRouter}=require("./routes/user");
const {adminRouter}=require("./routes/admin")


app.use("/user",userRouter)
app.use("/course",courseRouter)
app.use("/admin",adminRouter)


async function main() {
    await mongoose.connect("")
    app.listen(3000);
    console.log("listening on port 3000")
}

main()


