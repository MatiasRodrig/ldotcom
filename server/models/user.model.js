import mongoose, { model, Schema } from "mongoose";
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema(
    {
        usuario: {
            type: String,
            required: true
        },
        contrasenia: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        roles: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Role",
            },
        ],
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

userSchema.statics.encryptPassword = async (contrasenia) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(contrasenia, salt)
}

userSchema.statics.comparePassword = async (contrasenia, contraseniaRecibida) => {
    return await bcrypt.compare(contrasenia, contraseniaRecibida)
}

export default model('User', userSchema);
