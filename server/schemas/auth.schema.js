import { z } from 'zod'

export const schemaRegister = z.object({
    usuario: z.string().min(5, { message: 'El usuario debe tener minimo 5 letras' }),
    contrasenia: z.string().min(5, { message: 'La contraseña debe tener minimo 5 letras' }),
    body: z.object({ email: z.string().email({ message: 'Email invalido' }) })
}
)

export const schemaLogin = z.object(
  
)

