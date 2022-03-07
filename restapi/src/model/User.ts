const mongoose = require('mongoose')
const { model, Schema } = mongoose

export const UserSchema = new mongoose.Schema({
    name: { type: String, index: true, required: true },
    surname: { type: String, index: true,required: true },
    email: { type: String, index: true, required: true },
    password: { type: String, required: true }
    },
    { collection : 'User' });

export const User = mongoose.model('User',UserSchema,'User');