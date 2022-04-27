// const UserModel = require('../models/User')

function helloWithASentence() {
    // return UserModel.find().exec()
    return 'Hello but with more info'
}

module.exports = {
    helloWithASentence: helloWithASentence
}