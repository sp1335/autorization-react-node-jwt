const {Schema, model} = require('mongoose')

const UserSchema = new Schema({
    email:{type:String, unique: true, requited: true},
    password:{type:String, requited: true},
    isActivated:{type:Boolean, default: false},
    activationLink:{type:String}
})

module.exports = model('User', UserSchema)