const MsgModel = require('../model/model')

const post = {
    newMessage(req, res, next) {

        let { noms, email, title, message } = req.body;
        if (!noms || !email || !message) { res.send('emptyfield') }

        MsgModel.create({
            noms,
            email,
            title,
            message
        }).then(() => res.send('Message Envoyé'))
            .catch((err) => res.send(err))
    },

    getMsg(req, res, next) {
        MsgModel.find({}).then((data) => res.send(data))
    }
}

module.exports = post;