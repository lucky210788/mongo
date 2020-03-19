const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String}
});

const User = mongoose.model("User", UserSchema);
module.exports = User;