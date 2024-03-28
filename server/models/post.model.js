import { Schema, model } from "mongoose";

const PostSchema = new Schema({
    nombre: String,
    contenido: String,
    imageUrl: String
},{
    timestamps: true,
    versionKey: false
})



export default model('Posts', PostSchema)