import { Schema, model } from "mongoose";

const roleSchema = new Schema({
    nombre: String
},{
    timestamps: true,
    versionKey: false
})


export default model('Role', roleSchema)