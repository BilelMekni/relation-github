const mongoose = require("mongoose");

const publicationSchema = mongoose.Schema({

    title: String,
    description: String,
    clientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Accompagnant" // Model name
    },
    accompagnantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Accompagnant"
    },
    status: String,
    reservation: String,
});
// Model Name "Publication" => PascalCase
const publication = mongoose.model("Publication", publicationSchema);
module.exports = publication;