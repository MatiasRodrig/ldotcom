import { z } from 'zod'


const schemaPost = z.object({
    nombre: z.string({ required_error: "El titulo es obligatorio" }).min(2),
    contenido: z.string({ required_error: "¿No vas a escribir nada?" }).min(5),
    
}
)

export default schemaPost