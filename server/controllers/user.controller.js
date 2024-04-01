import Users from '../models/user.model.js'


export const crearUser = async (req, res) => {

    const { usuario, contrasenia, email } = req.body

    const newUser = new Users({ usuario, contrasenia, email })

    const savedUser = await newUser.save()

    res.status(201).json(savedUser)
}


export const obtenerUsers = (req, res) => {
    res.send('Users')
}


export const obtenerUserPorId = (req, res) => {
    res.send('Users')
}


export const actualizarUserPorId = (req, res) => {
    res.send('Users actualizado')
}


export const eliminarUserPorId = (req, res) => {
    res.send('Users eliminado')
}

