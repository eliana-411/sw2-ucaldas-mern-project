const mongoose = require("mongoose");

const userSchema = new  mongoose.Schema(
    {
        user_name: { type: String, required: true },
        lastname: {type: String,require: true},
        nacionality: {type: String,require: true},
        document: {type: String,require: true, unique: true},
        user_email: {type: String,require: true, unique: true},
        password: { type: String, required: true },
        user_active: {type: String,require: true, default:false}
    }
)
// en la exportacion, mongoose crea un modekos cuya colecion en la base de datos
// se llamara "user" y tendra la estructura definida en el esquema "userSchema"

module.exports = mongoose.model("User", userSchema);