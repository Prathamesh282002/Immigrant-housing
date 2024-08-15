const mongoose=require('mongoose');
// mongodb://0.0.0.0:27017/majorDB
mongoose.connect("mongodb+srv://shindeprathamesh08:shindeprathamesh08@cluster0.pcyg0ci.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/house_immigrant").then(() =>{
    console.log("connected to  FeedbackDB");
}).catch((err)=>{
    console.log(err);
})
const userSchema=mongoose.Schema({
    feedback:String
});

userFeedback= mongoose.model("feedback",userSchema);

module.exports=userFeedback;


