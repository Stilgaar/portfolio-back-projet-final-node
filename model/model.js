const mongoose = require('mongoose')

const MessageShema = mongoose.Schema({
    noms: String,
    email: String, 
    title: String, 
    message: String

})
const MsgModel = mongoose.model("message", MessageShema)

module.exports = MsgModel;