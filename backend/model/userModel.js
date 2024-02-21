// const mongoose = require("mongoose")
// const { Schema } = mongoose
// const userSchema = new Schema({
//     username: {
//         type: String,
//         require: true
//     },
//     email: {
//         type: String,
//         require: true
//     },
//     password: {
//         type: String,
//         require: true
//     },

//     role: {
//         type: String,
//         enum: ["user", "merchant", "admin"],
//         default: "user"
//     }
// })

// module.exports = mongoose.model("User", userSchema)

const mongoose = require("mongoose");
const { Schema } = mongoose;

const textSchema = new Schema({
  text: {
    type: String,
    required: true,
  },

});
module.exports = mongoose.model("Text", textSchema)

// module.exports = mongoose.model("Text", textSchema);