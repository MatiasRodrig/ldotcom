import { model, Schema } from "mongoose";


const userSchema = new Schema(
    {
        "usuario": {
            type: String,
            required: true
        },
        "contrasenia": {
            type: String,
            required: true
        },
        "email": {
            type: String,
            required: true
        }
    }
)


export default model('Users', userSchema); 