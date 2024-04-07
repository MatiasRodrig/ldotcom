import User from '../models/user.model.js'
import pkg from 'jsonwebtoken';
import Role from '../models/role.model.js'

export const registro = async (req, res) => {
    const { usuario, contrasenia, email, roles } = req.body

    // Verificar si el email ya existe
    const userExists = await User.findOne({ email });

    if (userExists) {
        return res.status(400).json({ message: "El email ya está en uso." });
    }

    const nuevoUsario = new User({
        usuario,
        email,
        contrasenia: await User.encryptPassword(contrasenia)
    })
    
    if (roles) {
        const foundRoles = await Role.find({ name: { $in: roles } })
        nuevoUsario.roles = foundRoles.map(role => role._id)
    } else {
        const role = Role.findOne({ name: 'usuario' })
        nuevoUsario.roles = [role._id]
    }
    
    try {

        const usuarioGuardado = await nuevoUsario.save()
        
        const token = pkg.sign({ _id: usuarioGuardado._id }, process.env.SECRET, { expiresIn: 86400 })

        res.json({ token })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Hubo un error al crear el usuario." });
    }
}
