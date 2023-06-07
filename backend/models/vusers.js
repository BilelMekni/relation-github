const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    firstName : String,
    lastName : String,
    telephone :Number,  
    pwd : String,
  
 
   
   
   
    
});

// Model Name "Accompagnant" => PascalCase
const user = mongoose.model("User",userSchema);
module.exports = user;