const mongoose = require("mongoose");


const requestSchema = mongoose.Schema({

    telephone :String,
    adresse : String,
    description: String,
   
    
});

// Model Name "Request" => PascalCase
const request = mongoose.model("Request",requestSchema);
module.exports = request;