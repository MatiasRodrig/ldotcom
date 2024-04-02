import Users from '../models/user.model.js'


export const crearUser = async (req, res) => {

    const { usuario, contrasenia, email } = req.body

    const userExists = await Users.findOne({ usuario });
    if (userExists) {
        return res.status(400).json({ message: 'El usuario ya existe' });
    } 

    const newUser = new Users({ usuario, contrasenia, email })

    const savedUser = await newUser.save()

    res.status(201).json(savedUser)
}


export const obtenerUsers = async (req, res) => {
    const users = await Users.find()

    res.status(200).json(users)
        
    if (!users) {
        res.status(500).json('No hay usuarios') 
    }	
        
}


export const obtenerUserPorId = async (req, res) => {
    const user = await Users.findById(req.params.id)

    res.status(200).json(user)
        
    if (!user) {
            res.status(404).json({ message: 'Usuario no encontrado' })
        }
}


export const actualizarUserPorId = async (req, res) => {
    const user = await Users.findById(req.params.id)
    
    if (user) {
        const { usuario, contrasenia, email } = req.body
        user.usuario = usuario
        user.contrasenia = contrasenia
        user.email = email
        const updatedUser = await user.save()
        res.status(200).json(updatedUser)
    } else {
        res.status(404).json({ message: 'User no encontrado' })
    }
}


export const eliminarUserPorId = async (req, res) => {
    const user = await Users.findById(req.params.id)
    if (user) {
        await user.deleteOne()
        res.status(200).json({ message: 'User eliminado' })
    } else {
        res.status(404).json({ message: 'User no encontrado' })
    }
};

