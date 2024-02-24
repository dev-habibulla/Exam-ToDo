const express = require("express")
const secureApi = require("../../middleware/secureApi")
const registrasionController = require("../../controllers/registrasionController");
const userModel = require("../../model/userModel");
const _ = express.Router()

_.post("/registrasion", secureApi, registrasionController);
// ok ebar kor
_.get ("/all", async (req,res)=>{
    const data= await userModel.find()
    res.send(data)
});
// ok ebar kor

// app.get("/api/v1/todo/alltodo", secureApi, async (req, res) => {
//     // const data = await todoSchema.find()
//     // res.send(data)
//     console.log("kira get");
// })

module.exports = _