const { mongoose, model } = require("mongoose");
const Schema = mongoose.Schema;



const articleSchema =new Schema({
    userNameee : String 
});


const Mydata = mongoose.model("Mydataa", articleSchema);



module.exports = Mydata
