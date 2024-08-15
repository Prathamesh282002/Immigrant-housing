const mongoose=require('mongoose');
// mongodb://0.0.0.0:27017/majorDB
mongoose.connect("mongodb+srv://shindeprathamesh08:shindeprathamesh08@cluster0.pcyg0ci.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/house_immigrant").then(() =>{
    console.log("connected to mongoDB");
}).catch((err)=>{
    console.log(err);
})
const userSchema=mongoose.Schema({
    name:String,
    city:String,
    gender:String,
    age:Number,
    occupation:String,
    budget:Number,
    area:String,
    preference:String
});

user= mongoose.model("user",userSchema);

module.exports=user;


