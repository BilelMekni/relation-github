const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const accpSchema = mongoose.Schema({
    firstName : String,
    lastName : String,
    telephone :Number,
    email :{type: String, unique: true},
    password : String,
    adresse : String,
    experience : String,
    role : String,
    status:String,
    gender : String,
    avatar : String,
    cv : String,
   
    
});
accpSchema.plugin(uniqueValidator);
// Model Name "Accompagnant" => PascalCase
const accp = mongoose.model("Accompagnant",accpSchema);
module.exports = accp;