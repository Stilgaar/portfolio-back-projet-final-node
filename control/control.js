const MsgModel = require('../model/model')

const post = {
    newMessage(req,res,next) {

        let { noms, email, title, message } = req.body; 

        if(!noms || !email || !message) {res.send('err')}

        MsgModel.create({
            noms,
            email,
            title,
            message
        }).then(() => res.send('done'))
    .catch((err) => res.send(err)) }}

module.exports = post; 