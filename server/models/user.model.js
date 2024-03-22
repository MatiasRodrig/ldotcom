import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        "usuario": {
            type: String,
            required: true
        },
        "contrasenia": {
            type: password,
            required: true
        },
        "email": {
            type: email,
            required: true
        }
    }
)


export default registerSchema; 