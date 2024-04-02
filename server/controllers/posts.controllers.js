import Post from '../models/post.model.js'

export const crearPost = async (req, res) => {

    const { nombre, contenido, imageUrl } = req.body

    const newPost = new Post({ nombre, contenido, imageUrl })

    const savedPost = await newPost.save()

    res.status(201).json(savedPost)
}

export const obtenerPosts = async (req, res) => {
    const Posteos = await Post.find()
    res.status(200).json(Posteos)
}

export const obtenerPostPorId = async (req, res) => {
    const post = await Post.findById(req.params._id)

    res.status(200).json(post)


}

export const actualizarPostPorId = async (req, res) => {
    const post = await Post.findById(req.params._id)

    if (post) {
        const { nombre, contenido, imageUrl } = req.body
        post.nombre = nombre
        post.contenido = contenido
        post.imageUrl = imageUrl
        const updatedPost = await post.save()
        res.status(200).json(updatedPost)
    } else {
        res.status(404).json({ message: 'Post no encontrado' })
    }
}

export const eliminarPostPorId = async (req, res) => {
    const postBorrado = await Post.findByIdAndDelete(req.params._id)
    res.status(204).json({ message: 'Post eliminado' })
}