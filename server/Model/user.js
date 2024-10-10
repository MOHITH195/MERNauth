import mongoose from "mongoose";

const newusers = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required: true
    }
});

const user = mongoose.model('user',newusers);

export default user;