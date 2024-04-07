import Role from '../models/role.model.js'
export const createRole = async () => {
    try {
        const count = await Role.estimatedDocumentCount()

        if (count > 0) return

        const valores = await Promise.all([
            new Role({ nombre: 'usuario' }).save(),
            new Role({ nombre: 'admin' }).save(),
            new Role({ nombre: 'moderador' }).save()
        ])

        console.log(valores)

    } catch (error) {
        console.log(error)
    }
}