import {z} from 'zod'

export const schemaRegister = z.object({
    usuario = z.string().min(5),
    contrasenia = z.String().min(5, {message: 'La contraseña debe tener minimo 5 letras'}),
    email = z.string().email()

})