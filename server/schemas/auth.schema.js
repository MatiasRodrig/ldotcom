import { z } from 'zod'

export const schemaRegister = z.object({
    usuario: z.string({ required_error: "El usuario es obligatorio" }).min(5, { message: 'El usuario debe tener minimo 5 letras' }),
    contrasenia: z.string({ required_error: "La contraseña es obligatoria" }).min(6, { message: 'La contraseña debe tener minimo 5 letras' }),
    email: z.string({ required_error: "El correo electrónico es obligatorio" }).email({ message: 'Email invalido' })
}
)

export const schemaLogin = z.object(
  
)

