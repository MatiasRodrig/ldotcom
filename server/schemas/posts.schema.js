import { z } from 'zod'


const schemaPost = z.object({
    title: z.string({ required_error: "El titulo es obligatorio" }).min(5),
    content: z.string({ required_error: "¿No vas a escribir nada?" }).min(5),
    imageUrl: z.string().url().optional()
}
)

export default schemaPost