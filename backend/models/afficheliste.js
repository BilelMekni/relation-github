const mongoose = require("mongoose");

const affichelisteSchema = mongoose.Schema({

    
    accompagnantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Accompagnant"
    },
    firstName: String,
    lastName: String,
    telephone: String,
    email: String,
    adresse: String,
});
// Model Name "Publication" => PascalCase
const afficheliste = mongoose.model("Afficheliste", affichelisteSchema);
module.exports = afficheliste;