import pkg from 'jsonwebtoken';
import User from '../models/user.model.js'
import Role from '../models/role.model.js'


export const authJWT = async (req, res, next) => {
    try {
        const token = req.headers['x-access-token'];
        if (!token) {
            return res.status(403).send({ message: 'No se proporciona ningun token!' });
        }

        const decoded = pkg.verify(token, process.env.SECRET)

        req.userId = decoded._id

        const user = await User.findById(req.userId, { password: 0 })

        if (!user) {
            return res.status(404).send({ message: 'No existe el usuario!' });
        }

        next();

    } catch (error) {
        res.status(401).json({ message: "No autorizado" })
    }
}

export const esModerador = async (req, res, next) => {
    const user = await User.findById(req.userId)
    const roles = await Role.find({ _id: { $in: user.roles } })
    for (let i = 0; i < roles.length; i++) {
        if (roles[i].nombre === "moderador") {
            next();
            return;
        }
    }
    res.status(403).json({ message: "No autorizado" })
}

export const esAdmin = async (req, res, next) => {
    const user = await User.findById(req.userId)
    const roles = await Role.find({ _id: { $in: user.roles } })
    for (let i = 0; i < roles.length; i++) {
        if (roles[i].nombre === "admin") {
            next();
            return;
        }
    }
    res.status(403).json({ message: "No autorizado" })
}