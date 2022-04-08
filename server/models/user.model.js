import mongoose from 'mongoose';
const usermodel = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
},
    {
        timestamps: true,
    });
const User = mongoose.model('User', usermodel);
export default User;
