import Posts from './models/post.model.js'

export const crearPost = async (req, res) => {

    const { nombre, contenido, imageUrl } = req.body

    const newPost = new Posts({ nombre, contenido, imageUrl })

    const savedPost = await newPost.save()

    res.status(201).send(savedPost)
}

export const obtenerPosts = (req, res) => {
    res.send('Posts')
}

export const obtenerPostPorId = (req, res) => {
    res.send('Posts')
}

export const actualizarPostPorId = (req, res) => {
    res.send('Posts actualizado')
}

export const eliminarPostPorId = (req, res) => {
    res.send('Posts eliminado')
}